"use client";

import { useEffect, useRef } from "react";

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollFade({ children, className = "", delay = 0 }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setTimeout(() => {
        el.classList.add("visible");
      }, delay);
    };

    // Fallback: if IntersectionObserver doesn't fire (e.g. Facebook in-app browser),
    // reveal after 1.5s so content is never permanently hidden
    const fallbackTimer = setTimeout(reveal, 1500);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer);
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-fade ${className}`}>
      {children}
    </div>
  );
}
