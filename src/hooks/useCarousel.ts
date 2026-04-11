import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type CarouselOptions = {
  gap?: number;
  speed?: number;
  direction?: "ltr" | "rtl";
  isActive?: boolean;
};

type CarouselBindings = {
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

type CarouselHookReturn<T> = {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  loopItems: T[];
  cardWidth: number;
  gap: number;
  isDragging: boolean;
  bindings: CarouselBindings;
};

const DEFAULT_GAP = 24;
const DEFAULT_SPEED = 22;

function getPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

function normalizePosition(value: number, trackWidth: number) {
  if (trackWidth <= 0) return 0;
  return ((value % trackWidth) + trackWidth) % trackWidth;
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  return prefersReducedMotion;
}

export function useCarousel<T>(
  items: T[],
  options: CarouselOptions = {}
): CarouselHookReturn<T> {
  const gap = options.gap ?? DEFAULT_GAP;
  const speed = options.speed ?? DEFAULT_SPEED;
  const direction = options.direction ?? "ltr";
  const isRtl = direction === "rtl";
  const transformSign = isRtl ? 1 : -1;
  const dragSign = isRtl ? 1 : -1;
  const isActive = options.isActive ?? true;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const positionRef = useRef(0);
  const startXRef = useRef(0);
  const startPositionRef = useRef(0);
  const trackWidthRef = useRef(0);
  const autoFrameRef = useRef<number | null>(null);
  const snapFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isSnappingRef = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const loopItems = useMemo(() => [...items, ...items], [items]);

  const updateTransform = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${transformSign * positionRef.current}px, 0, 0)`;
  }, [transformSign]);

  const updateMeasurements = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const width = viewport.clientWidth;
    const perView = getPerView(width);
    const nextCardWidth = (width - gap * (perView - 1)) / perView;
    setCardWidth(nextCardWidth);
  }, [gap]);

  useEffect(() => {
    updateMeasurements();
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(updateMeasurements);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [updateMeasurements]);

  useEffect(() => {
    const step = cardWidth + gap;
    trackWidthRef.current = items.length * step;
    positionRef.current = normalizePosition(positionRef.current, trackWidthRef.current);
    updateTransform();
  }, [cardWidth, gap, items.length, updateTransform]);

  const animateTo = useCallback(
    (target: number) => {
      const trackWidth = trackWidthRef.current;
      if (!trackWidth) return;
      isSnappingRef.current = true;

      const start = positionRef.current;
      let delta = target - start;
      if (delta > trackWidth / 2) delta -= trackWidth;
      if (delta < -trackWidth / 2) delta += trackWidth;

      const duration = 320;
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        positionRef.current = normalizePosition(start + delta * ease, trackWidth);
        updateTransform();

        if (progress < 1) {
          snapFrameRef.current = requestAnimationFrame(tick);
        } else {
          isSnappingRef.current = false;
        }
      };

      snapFrameRef.current = requestAnimationFrame(tick);
    },
    [updateTransform]
  );

  const snapToNearest = useCallback(() => {
    const step = cardWidth + gap;
    if (!step || !items.length) return;
    const trackWidth = trackWidthRef.current;
    const index = Math.round(positionRef.current / step) % items.length;
    const target = normalizePosition(index * step, trackWidth);
    animateTo(target);
  }, [animateTo, cardWidth, gap, items.length]);

  useEffect(() => {
    if (!cardWidth || !items.length || !isActive || prefersReducedMotion) return;

    const tick = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const trackWidth = trackWidthRef.current;
      if (!trackWidth) {
        autoFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!isHoveredRef.current && !isDraggingRef.current && !isSnappingRef.current) {
        positionRef.current = normalizePosition(
          positionRef.current + speed * delta,
          trackWidth
        );
        updateTransform();
      }

      autoFrameRef.current = requestAnimationFrame(tick);
    };

    autoFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (autoFrameRef.current) cancelAnimationFrame(autoFrameRef.current);
      autoFrameRef.current = null;
      lastTimeRef.current = null;
    };
  }, [cardWidth, items.length, speed, updateTransform, isActive, prefersReducedMotion]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;
      const trackWidth = trackWidthRef.current;
      if (!trackWidth) return;
      const delta = event.clientX - startXRef.current;
      positionRef.current = normalizePosition(
        startPositionRef.current + delta * dragSign,
        trackWidth
      );
      updateTransform();
    };

    const handlePointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      snapToNearest();
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [snapToNearest, updateTransform]);

  useEffect(
    () => () => {
      if (snapFrameRef.current) cancelAnimationFrame(snapFrameRef.current);
    },
    []
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0) return;
      const trackWidth = trackWidthRef.current;
      if (!trackWidth) return;
      if (snapFrameRef.current) {
        cancelAnimationFrame(snapFrameRef.current);
        snapFrameRef.current = null;
      }
      isDraggingRef.current = true;
      setIsDragging(true);
      isSnappingRef.current = false;
      startXRef.current = event.clientX;
      startPositionRef.current = positionRef.current;
    },
    []
  );

  const bindings = useMemo(
    () => ({
      onPointerDown: handlePointerDown,
      onMouseEnter: () => {
        isHoveredRef.current = true;
      },
      onMouseLeave: () => {
        isHoveredRef.current = false;
      },
    }),
    [handlePointerDown]
  );

  return {
    viewportRef,
    trackRef,
    loopItems,
    cardWidth,
    gap,
    isDragging,
    bindings,
  };
}
