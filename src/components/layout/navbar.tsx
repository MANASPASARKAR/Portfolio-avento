"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/providers/theme-provider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/projects" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-xl transition-colors duration-300">
      <Container>
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center gap-2 font-heading text-xl font-bold tracking-wider text-foreground">
              <span>AVENTO</span>
              <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-transform duration-300 group-hover:scale-125" />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Right (Theme Toggle + CTA) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded-full border border-brand/40 bg-brand-soft text-foreground hover:bg-brand hover:text-white hover:border-brand"
            >
              Start Project
            </Link>
          </div>
          
          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2.5 text-foreground hover:bg-surface-muted rounded-lg border border-border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-surface backdrop-blur-2xl">
          <Container>
            <div className="space-y-2 px-2 pb-8 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold tracking-wide text-foreground hover:bg-surface-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full rounded-full py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-brand hover:bg-brand-hover transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}



