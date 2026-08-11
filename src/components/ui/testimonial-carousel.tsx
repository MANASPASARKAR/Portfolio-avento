"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ANIMATION_CONSTANTS } from "@/lib/animations/constants";

interface Testimonial {
  id: string | number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (testimonials.length <= 1) return;
    animateSlide(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length));
  };

  const prev = () => {
    if (testimonials.length <= 1) return;
    animateSlide(() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length));
  };

  const animateSlide = (updateState: () => void) => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      updateState();
      return;
    }

    const el = slideRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        autoAlpha: 0,
        y: 10,
        duration: ANIMATION_CONSTANTS.DURATION / 2,
        ease: ANIMATION_CONSTANTS.EASE,
        onComplete: () => {
          updateState();
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: -10 },
            { autoAlpha: 1, y: 0, duration: ANIMATION_CONSTANTS.DURATION / 2, ease: ANIMATION_CONSTANTS.EASE }
          );
        },
      });
    }, containerRef);
    
    // We don't revert here because this is an interaction-based timeline, not layout effect
  };

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto" ref={containerRef}>
      <div 
        ref={slideRef}
        className="p-8 md:p-12 rounded-3xl border border-border bg-background relative shadow-sm"
        aria-live="polite"
      >
        <svg className="w-12 h-12 text-primary-200 dark:text-primary-900 absolute top-8 left-8" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-xl md:text-2xl text-foreground font-medium mb-10 relative z-10 pl-6 pt-6">
          "{current.quote}"
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-neutral-200 dark:bg-neutral-800 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] text-neutral-400">
              [Photo]
            </div>
            <div>
              <p className="font-semibold text-foreground text-lg">{current.author}</p>
              <p className="text-sm text-neutral-500">{current.role}, {current.company}</p>
            </div>
          </div>
          
          {testimonials.length > 1 && (
            <div className="flex items-center gap-2">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Previous testimonial"
              >
                &larr;
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Next testimonial"
              >
                &rarr;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
