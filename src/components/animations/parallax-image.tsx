"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Make sure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxImageProps {
  children: React.ReactNode; // e.g. the actual image or placeholder div
  className?: string; // container class, should usually have overflow-hidden
  speed?: number; // 0.1 to 1.0 (default 0.2)
}

export function ParallaxImage({
  children,
  className = "",
  speed = 0.2,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // A subtle yPercent shift based on speed
    const yShift = speed * 100;

    const ctx = gsap.context(() => {
      // Start inner element slightly above its center
      gsap.set(inner, {
        yPercent: -yShift / 2,
        scale: 1.1, // Slight scale up so it doesn't show edges during parallax
      });

      // Move it down as we scroll
      gsap.to(inner, {
        yPercent: yShift / 2,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true, // scrub: true links it strictly to the scrollbar
        },
      });
    }, container);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={innerRef} className="absolute inset-0 w-full h-full">
        {children}
      </div>
    </div>
  );
}
