import { useEffect, useRef, useState } from "react";

type InViewOptions = IntersectionObserverInit & {
  initialInView?: boolean;
};

export function useInView<T extends Element>(options: InViewOptions = {}) {
  const {
    initialInView = true,
    root = null,
    rootMargin = "0px",
    threshold = 0,
  } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(initialInView);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return { ref, inView };
}
