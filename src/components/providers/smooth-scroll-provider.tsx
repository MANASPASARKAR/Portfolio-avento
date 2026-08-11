"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger in a client-safe way
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    // Skip Lenis if reduced motion is preferred
    if (isReducedMotion) return;

    // Initialize Lenis with ultra-smooth lerp & duration
    const lenis = new Lenis({
      lerp: 0.07,
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });


    // Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP's ticker to run Lenis's requestAnimationFrame
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Disable GSAP's lag smoothing to prevent visual jumps with Lenis
    gsap.ticker.lagSmoothing(0);

    // Set up ResizeObserver to refresh ScrollTrigger when page height changes
    // This is crucial for fixing scroll breakage when components dynamically load or change height
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    
    // We observe body. In a Next.js app, body height changing means we need to recalculate.
    resizeObserver.observe(document.body);

    // Cleanup on unmount
    return () => {
      resizeObserver.disconnect();
      // Un-sync ScrollTrigger
      lenis.off("scroll", ScrollTrigger.update);
      // Remove ticker
      gsap.ticker.remove(update);
      // Destroy lenis
      lenis.destroy();
    };
  }, [isReducedMotion]);

  return <>{children}</>;
}
