# Project: [Agency Name] Portfolio Website

## Overview
Portfolio website for a digital agency offering web design and automation services. Built with Next.js (App Router) + TypeScript, Tailwind CSS, no database or custom backend — static content plus third-party service integrations (contact form, scheduling embed). Strong emphasis on polished UI, scroll animations, and UX quality since the site itself is a demonstration of the agency's capabilities.

## Phases
- **Phase 1 — UI & wiring (placeholder data):** Build out the full site — structure, design system, animations, and all service integrations — using placeholder/dummy content throughout. Goal is to validate UX and polish before any real content goes in.
- **Phase 2 — Real content:** Replace placeholder values with actual copy, real testimonials, live service credentials, and final assets.

## Phase 1 Steps
1. Repo & tooling init (Next.js + TS, Tailwind, ESLint/Prettier, folder structure, git)
2. Design tokens & shared shell (fonts, colors, Navbar, Footer, layout primitives)
3. Route scaffolding with placeholder content (Home, About, Projects, Services, Contact)
4. Scroll/animation infrastructure (smooth scroll + reveal animation system, reduced-motion handled)
5. Component-level animation pass (project cards, testimonials carousel, services list)
6. External service stubs (scheduling embed sandbox, contact form test endpoint, GitHub link placeholders)
7. Responsive, accessibility & polish pass (breakpoints, focus states, SEO/meta, favicon)

## Log

### Step 1 — Repo & tooling init
Status: Completed
What was done:
- Scaffolded Next.js 16.3 (App Router) project with React 19 and TypeScript.
- Integrated Tailwind CSS v4 and PostCSS.
- Configured ESLint (`eslint.config.mjs`) and Prettier (`.prettierrc`) with Next.js linting standards.
- Initialized local Git repository with `.gitignore`.
- Established standard folder structure utilizing the `src/` directory.
- Used `npm` as the package manager (verified via `package-lock.json`).
Notes/decisions:
- Verified that build (`npm run build`) and dev (`npm run dev`) succeed, evidenced by the presence of the `.next` directory.
- Strictly maintained a zero-content policy to ensure foundational tooling is solid before proceeding with UI.
---

### Step 2 — Design tokens & shared shell
Status: Completed
What was done:
- **Design Tokens**: Configured Tailwind CSS v4 variables in `src/app/globals.css` with a modern dark neutral base and indigo accent color palette, a customized section spacing scale, and border-radius/shadow tokens.
- **Typography**: Integrated `Inter` (body) and `Outfit` (headings) via `next/font/google` in `layout.tsx` and created a responsive type scale utility class system in `globals.css`.
- **Primitives**: Created foundational UI layout wrappers at `src/components/ui/`: `Container` (max-width + padding), `Section` (vertical spacing), and `Button` (variants & sizes).
- **Shell Components**: Built placeholder shell components at `src/components/layout/`: `Navbar` (logo, links, mobile menu) and `Footer` (company info, service links, social links).
- **Layout Integration**: Wired the `Navbar` and `Footer` into the root `src/app/layout.tsx` to automatically wrap all future pages.
Notes/decisions:
- Maintained placeholder content (e.g. "[Agency Logo]") strictly, avoiding any real asset insertion.
- Verified that both `next build` and `next dev` complete successfully with the new structural additions.
---

### Step 3 — Route scaffolding with placeholder content
Status: Completed
What was done:
- **Content Files**: Created `src/content/projects.json`, `src/content/services.json`, and `src/content/testimonials.json` to store all placeholder data. *Note: Testimonials are currently using placeholder text; pending real text for Phase 2.*
- **Page Routes**: Scaffolded all required routes using the shared `Navbar`, `Footer`, `Container`, and `Section` primitives:
  - `Home` (`/`): Added Hero, "What we do", Featured projects, and CTA sections.
  - `About` (`/about`): Added company story, vision/mission, founding info, and placeholder team member cards.
  - `Terms of Service` (`/terms`): Added placeholder legal copy and updated the Footer link.
  - `Projects` (`/projects`): Added a grid of project cards fetching from `projects.json` and a testimonials section fetching from `testimonials.json`.
  - `Project Detail` (`/projects/[slug]`): Added dynamic route with `generateStaticParams` to render individual project details.
  - `Services` (`/services`): Added list of services fetching from `services.json` and placeholder booking CTAs.
  - `Contact` (`/contact`): Added a placeholder contact form with basic UI-only states (idle, submitting, success) and static contact details.
Notes/decisions:
- Strictly maintained a static layout with no animations or actual third-party integrations as per Step 3 constraints.
- Verified that `next build` successfully static-generates all routes (including dynamic project paths).
---

### Step 4 — Scroll/animation infrastructure
Status: Completed
What was done:
- **Libraries Installed**: Installed `lenis` for smooth scrolling and `gsap` for scroll-driven animations.
- **Providers**: Created `<SmoothScrollProvider>` (`src/components/providers/smooth-scroll-provider.tsx`) to initialize Lenis, sync `ScrollTrigger.update` to Lenis's scroll event, and drive Lenis's `raf` via `gsap.ticker`. This provider wraps the root application in `layout.tsx`.
- **Accessibility/Reduced Motion**: Configured the provider and animation utilities to actively check `(prefers-reduced-motion: reduce)`. If enabled, Lenis bypasses initialization entirely, returning standard scroll behavior.
- **Utilities**: Created `<ScrollReveal>` wrapper component (`src/components/animations/scroll-reveal.tsx`) built with GSAP context. It handles entering animations (opacity + transform) while avoiding SSR execution errors and memory leaks.
- **Smoke Test**: Applied the `<ScrollReveal>` component to the Hero section in `src/app/page.tsx` as a functional end-to-end pipeline test.
Notes/decisions:
- Strictly maintained an isolated smoke-test approach without deploying animations globally. Site-wide animations will be implemented in Step 5.
- Verified that `next build` passes seamlessly and no SSR mismatched layout warnings occur from GSAP/Lenis plugins.
---

### Step 5 — Component-level animation pass
Status: Completed
What was done:
- **Shared Animation Constants**: Created `src/lib/animations/constants.ts` for uniform `DURATION`, `EASE`, `DISTANCE`, and `STAGGER` values.
- **Animation Utilities**: 
  - Updated `<ScrollReveal>` to support `playOnMount` (bypassing ScrollTrigger for Hero sections above the fold).
  - Created `<StaggerReveal>` for sequentially animating lists and grids on scroll.
  - Created `<ParallaxImage>` for subtle vertical `yPercent` scrubbing effects.
  - Built a GSAP-driven `<TestimonialCarousel>` with smooth fade+translate transitions.
- **Page Implementations**:
  - **Home**: `playOnMount` Hero, `<StaggerReveal>` for "What We Do" and "Featured Projects", `<ParallaxImage>` for project thumbnails, and `<ScrollReveal>` for the CTA.
  - **Projects**: `<StaggerReveal>` + `<ParallaxImage>` on the grid, and interactive `<TestimonialCarousel>` mounted within a `<ScrollReveal>`.
  - **Project Detail**: `<StaggerReveal>` for content sections (description, tech tags, links).
  - **Services**: `<StaggerReveal>` for service list items, `<ScrollReveal>` for CTAs.
  - **About**: `playOnMount` Hero, `<ScrollReveal>` for mission/vision blocks, `<StaggerReveal>` for the team members grid.
Notes/decisions:
- Ensured absolute parity across the site in animation duration and easing to make it feel like a unified design system.
- Maintained strict respect for `prefers-reduced-motion` at the root of every animation utility, bypassing GSAP timelines entirely if enabled.
- Verified smooth scroll performance and `next build` success.
---

### Step 6 — External service stubs
Status: Completed
What was done:
- **Scheduling Embed**: Installed `@calcom/embed-react` and created a `<CalEmbed>` client component. Integrated it into the `/services` page using the public demo endpoint (`cal.com/rick`), styled to fit seamlessly within the site's rounded container design.
- **Contact Form**: Created a sandbox API route (`/api/contact/route.ts`) to validate payloads and simulate server-side logging with a 1.5s delay. Updated the `/contact` page with robust client-side validation, `fetch` logic, and interactive loading/success/error UI states.
- **GitHub Links**: Confirmed that all project GitHub links in `/projects/[slug]/page.tsx` default to static placeholder URLs (e.g. `https://github.com/placeholder/repo-1`) fetched from the `projects.json` content file.

### Step 7 — Responsive, accessibility & polish pass
Status: Completed
What was done:
- **Accessibility**: 
  - Added `aria-expanded` and `aria-controls` to the mobile menu toggle in the Navbar.
  - Added `aria-live="polite"` to the `TestimonialCarousel` slide container to announce dynamic changes to screen readers.
  - Validated semantic heading structures (`h1` per page) and alt attributes.
- **SEO & Meta**: 
  - Created standard `src/app/robots.ts` and `src/app/sitemap.ts` files to programmatically generate `robots.txt` and `sitemap.xml`.
  - Updated root `layout.tsx` metadata with dynamic Title templates, Open Graph images/tags, Twitter card support, and a placeholder SVG emoji favicon.
- **Responsive & Polish**: 
  - Verified cross-device padding, grid wrapping, and carousel scaling.
  - Ensured functional, non-disruptive feedback loops (loading, success, error) on form submission.
- **Phase 1 complete.**
---
