"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ANIMATION_CONSTANTS } from "@/lib/animations/constants";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  playOnMount?: boolean;
}

export function StaggerReveal({
  children,
  className = "",
  staggerChildren = ANIMATION_CONSTANTS.STAGGER,
  direction = "up",
  distance = ANIMATION_CONSTANTS.DISTANCE,
  playOnMount = false,
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".stagger-item");
    if (items.length === 0) return;

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
      // Set initial state for all items
      gsap.set(items, {
        autoAlpha: 0,
        x,
        y,
      });

      const vars: gsap.TweenVars = {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: ANIMATION_CONSTANTS.DURATION,
        ease: ANIMATION_CONSTANTS.EASE,
        stagger: staggerChildren,
      };

      if (!playOnMount) {
        vars.scrollTrigger = {
          trigger: el,
          start: "top 85%",
          once: true,
        };
      }

      gsap.to(items, vars);
    }, el);

    return () => ctx.revert();
  }, [direction, distance, staggerChildren, playOnMount]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
