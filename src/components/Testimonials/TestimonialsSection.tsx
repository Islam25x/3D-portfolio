import { testimonials } from "../../constants";
import { styles } from "../../styles";
import TestimonialCard from "./TestimonialCard";
import { useCarousel } from "../../hooks/useCarousel";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function TestimonialsSection() {
  const { t, i18n } = useTranslation();
  const translatedTestimonials = useMemo(
    () =>
      testimonials.map((testimonial) => ({
        ...testimonial,
        quote: t(testimonial.quoteKey),
        author: t(testimonial.authorKey),
        role: t(testimonial.roleKey),
      })),
    [i18n.language, t]
  );

  const isRtl = i18n.resolvedLanguage === "ar";
  const { viewportRef, trackRef, loopItems, cardWidth, gap, isDragging, bindings } =
    useCarousel(translatedTestimonials, { gap: 24, speed: 22, direction: isRtl ? "rtl" : "ltr" });

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-5 sm:px-16 mt-40">
      <div data-aos="fade-up">
        <p className={styles.sectionSubText}>{t("testimonials.sub")}</p>
        <h2 className={styles.sectionHeadText}>{t("testimonials.title")}</h2>
      </div>

      <div
        ref={viewportRef}
        className={`mt-12 overflow-hidden select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-y" }}
        {...bindings}
      >
        <div
          ref={trackRef}
          className="flex items-stretch will-change-transform"
          style={{ gap: `${gap}px` }}
        >
          {loopItems.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              width={cardWidth || 320}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
