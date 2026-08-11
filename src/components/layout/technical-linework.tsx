"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TechnicalLinework() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!containerRef.current || !svgRef.current) return;

    // Center spotlight initially
    containerRef.current.style.setProperty("--mouse-x", `${window.innerWidth / 2}px`);
    containerRef.current.style.setProperty("--mouse-y", `${window.innerHeight / 2}px`);

    const ctx = gsap.context(() => {
      // 1. SCROLL PARALLAX
      if (!prefersReducedMotion) {
        gsap.to(svgRef.current, {
          yPercent: -15, 
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        const arcs = svgRef.current?.querySelectorAll(".animated-arc");
        if (arcs && arcs.length > 0) {
          gsap.to(arcs, {
            rotation: 15,
            transformOrigin: "center center",
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        }
      }

      // 2. MOUSE INTERACTION (Flashlight + Panning)
      if (!prefersReducedMotion) {
        // High-performance GSAP setters for panning
        const xTo = gsap.quickTo(svgRef.current, "x", { duration: 0.8, ease: "power3.out" });
        const yTo = gsap.quickTo(svgRef.current, "y", { duration: 0.8, ease: "power3.out" });

        const onMouseMove = (e: MouseEvent) => {
          // Update CSS variables for the radial mask (Flashlight effect)
          if (containerRef.current) {
            containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
            containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
          }

          // Normalize mouse coordinates (-1 to 1) for panning
          const normX = (e.clientX / window.innerWidth) * 2 - 1;
          const normY = (e.clientY / window.innerHeight) * 2 - 1;

          // Pan slightly opposite to mouse direction
          xTo(normX * -40);
          yTo(normY * -40);
        };

        window.addEventListener("mousemove", onMouseMove);

        // Cleanup listener on context revert
        return () => window.removeEventListener("mousemove", onMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden transition-opacity duration-700"
      style={{
        // The mask creates the "flashlight" revealing the grid underneath the cursor
        // We increased the fallback from 0.15 to 0.4 so it's much more visible everywhere
        WebkitMaskImage: `radial-gradient(circle 800px at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, rgba(0,0,0,0.4) 100%)`,
        maskImage: `radial-gradient(circle 800px at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, rgba(0,0,0,0.4) 100%)`,
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        // Significantly increased base opacity. In light mode (text-foreground is dark), it will be very visible.
        className="absolute top-[-10vh] left-[-10vw] w-[120vw] h-[130vh] min-h-screen text-foreground opacity-60 dark:opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="blueprint-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M 20 0 L 20 80 M 40 0 L 40 80 M 60 0 L 60 80 M 0 20 L 80 20 M 0 40 L 80 40 M 0 60 L 80 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.15"
              opacity="0.4"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#blueprint-grid)" />

        <g className="animated-arc">
          <circle cx="80%" cy="30%" r="45%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="80%" cy="30%" r="40%" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 80% 30% m -20 0 l 40 0 m -20 -20 l 0 40" stroke="currentColor" strokeWidth="0.5" />
        </g>

        <g className="animated-arc">
          <circle cx="10%" cy="70%" r="35%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 10" />
          <path d="M 10% 70% m -30 0 l 60 0 m -30 -30 l 0 60" stroke="currentColor" strokeWidth="0.5" />
        </g>

        <path d="M 0,200 Q 400,300 800,150 T 1600,200" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M 0,210 Q 400,310 800,160 T 1600,210" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 4" />

        <path d="M 200,400 m -10,0 l 20,0 m -10,-10 l 0,20" stroke="currentColor" strokeWidth="1" />
        <path d="M 85vw,80vh m -15,0 l 30,0 m -15,-15 l 0,30" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
