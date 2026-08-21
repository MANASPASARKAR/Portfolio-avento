"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

interface PortfolioStackProps {
  projects: Project[];
}

export function PortfolioStack({ projects }: PortfolioStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        // Sticky top for card[i+1] is calc(5.5rem + (i+1) * 1.25rem)
        const nextCardStickyTopRem = 5.5 + (i + 1) * 1.25;
        // Multiply by 16 to get approximate pixels (assuming 16px base font size)
        const nextCardStickyTopPx = nextCardStickyTopRem * 16;

        gsap.to(card, {
          scale: 0.96,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom", 
            end: `top ${nextCardStickyTopPx}px`, 
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      // Force a refresh after layout to ensure triggers are perfectly placed
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }, containerRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <div ref={containerRef} className="space-y-16 md:space-y-32 pb-24 md:pb-40">
      {projects.map((project, index) => (
        <div
          key={project.slug}
          className="sticky group"
          style={{
            top: `calc(5.5rem + ${index * 1.25}rem)`,
          }}
        >
          <div 
            ref={(el) => { cardsRef.current[index] = el; }}
            className="origin-top"
            style={{ willChange: "transform, opacity" }}
          >
          <div className="border border-border bg-surface backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-brand/40 relative group/card">
            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View case study for ${project.title}`} />
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Screenshot Display — 7 cols on desktop */}
              <div className="lg:col-span-7 aspect-[16/10] relative overflow-hidden bg-surface-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />
              </div>

              {/* Information — 5 cols on desktop */}
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border bg-surface">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold tracking-widest text-brand uppercase">
                      PROJECT {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-xs text-muted font-mono">
                      {project.slug}
                    </span>
                  </div>

                  <h3 className="text-h3 mb-4 text-foreground group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-body text-muted mb-8 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono font-semibold px-3 py-1 rounded-full border border-border text-foreground bg-surface-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-3 text-sm font-bold text-foreground group-hover/card:text-brand transition-colors">
                    Explore Case Study
                    <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-xs group-hover/card:border-brand group-hover/card:bg-brand-soft transition-all">
                      →
                    </span>
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


