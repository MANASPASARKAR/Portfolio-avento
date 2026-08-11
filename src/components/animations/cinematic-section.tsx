"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CinematicSectionProps {
  children: React.ReactNode;
  className?: string;
  exitScale?: number;
  exitBlur?: boolean;
  id?: string;
}

export function CinematicSection({
  children,
  className = "",
  exitScale = 0.975,
  exitBlur = true,
  id,
}: CinematicSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = sectionRef.current;
    if (!el) return;

    // Kill any pre-existing ScrollTrigger with this id to avoid duplication on HMR
    if (id) {
      ScrollTrigger.getById(`cinematic-exit-${id}`)?.kill();
    }

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scale: exitScale,
        opacity: 0.65,
        filter: exitBlur ? "blur(2.5px)" : "none",
        ease: "none",
        scrollTrigger: {
          id: id ? `cinematic-exit-${id}` : undefined,
          trigger: el,
          start: "bottom 75%",
          end: "bottom 5%",
          scrub: 1.5,
        },
      });
    }, el);

    return () => {
      // clearProps resets all inline GSAP styles before the element unmounts
      // This prevents stale transform/opacity/filter from bleeding into page transitions
      if (el) {
        gsap.set(el, { clearProps: "scale,opacity,filter" });
      }
      ctx.revert();
    };
  }, [exitScale, exitBlur, id]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{ transformOrigin: "50% 55%", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
