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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-fade ${className}`}>
      {children}
    </div>
  );
}
