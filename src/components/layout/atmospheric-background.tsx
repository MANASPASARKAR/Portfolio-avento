"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "@/components/providers/theme-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AtmosphericBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const orb4Ref = useRef<HTMLDivElement>(null);
  const orb5Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // Independent parallax and drifting for each atmospheric layer
      tl.to(orb1Ref.current, {
        yPercent: 120,
        xPercent: -40,
        scale: 1.2,
        ease: "none",
        duration: 1,
      }, 0)
      .to(orb2Ref.current, {
        yPercent: -100,
        xPercent: 50,
        scale: 1.4,
        ease: "none",
        duration: 1,
      }, 0)
      .to(orb3Ref.current, {
        yPercent: 80,
        xPercent: -80,
        scale: 0.9,
        ease: "none",
        duration: 1,
      }, 0)
      .to(orb4Ref.current, {
        yPercent: -60,
        xPercent: 30,
        scale: 1.5,
        ease: "none",
        duration: 1,
      }, 0)
      .to(orb5Ref.current, {
        yPercent: 150,
        xPercent: -20,
        scale: 1.1,
        ease: "none",
        duration: 1,
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, [theme]);

  return (
    <div
      ref={containerRef}
      id="atmospheric-canvas"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-background transition-colors duration-700"
    >
      <div 
        ref={orb1Ref}
        className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full opacity-60 mix-blend-normal"
        style={{
          background: "var(--atmosphere-violet)",
          filter: "blur(120px)",
          willChange: "transform",
        }}
      />
      <div 
        ref={orb2Ref}
        className="absolute top-[30%] left-[-20%] w-[60vw] h-[60vw] rounded-full opacity-50 mix-blend-normal"
        style={{
          background: "var(--atmosphere-cyan)",
          filter: "blur(130px)",
          willChange: "transform",
        }}
      />
      <div 
        ref={orb3Ref}
        className="absolute bottom-[-20%] right-[-15%] w-[80vw] h-[80vw] rounded-full opacity-40 mix-blend-normal"
        style={{
          background: "var(--atmosphere-pink)",
          filter: "blur(140px)",
          willChange: "transform",
        }}
      />
      <div 
        ref={orb4Ref}
        className="absolute top-[60%] left-[20%] w-[50vw] h-[50vw] rounded-full opacity-40 mix-blend-normal"
        style={{
          background: "var(--atmosphere-warm)",
          filter: "blur(110px)",
          willChange: "transform",
        }}
      />
      <div 
        ref={orb5Ref}
        className="absolute top-[-20%] left-[40%] w-[90vw] h-[90vw] rounded-full opacity-30 mix-blend-normal"
        style={{
          background: "var(--atmosphere-violet)",
          filter: "blur(150px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}






