"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ANIMATION_CONSTANTS } from "@/lib/animations/constants";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  playOnMount?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = ANIMATION_CONSTANTS.DISTANCE,
  playOnMount = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up":
        y = distance;
        break;
      case "down":
        y = -distance;
        break;
      case "left":
        x = distance;
        break;
      case "right":
        x = -distance;
        break;
    }

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(el, {
        autoAlpha: 0,
        x,
        y,
      });

      // Animate
      const vars: gsap.TweenVars = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: ANIMATION_CONSTANTS.DURATION,
        ease: ANIMATION_CONSTANTS.EASE,
        delay,
      };

      if (!playOnMount) {
        vars.scrollTrigger = {
          trigger: el,
          start: "top 85%",
          once: true,
        };
      }

      gsap.to(el, vars);
    }, el);

    return () => ctx.revert();
  }, [direction, distance, delay, playOnMount]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
