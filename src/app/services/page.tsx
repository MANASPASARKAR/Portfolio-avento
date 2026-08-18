import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { CalEmbed } from "@/components/ui/cal-embed";
import { AutomationNotifyTrigger } from "@/components/ui/automation-notify-modal";

export const metadata = {
  title: "Services & Capabilities | AVENTO Studio",
  description: "Websites that win trust, search & AI discovery that brings people in, and upcoming automation that saves your business time.",
};

const webDevDeliverables = [
  {
    title: "LOOK THE PART",
    description: "A distinctive website designed around your brand, not another template that looks like everyone else's.",
  },
  {
    title: "TURN VISITORS INTO CUSTOMERS",
    description: "Clear messaging, calls to action, and user journeys designed to make it easy for people to contact you, inquire, or buy.",
  },
  {
    title: "WORK EVERYWHERE",
    description: "A fast, responsive experience that works beautifully on phones, tablets, and desktops.",
  },
  {
    title: "BUILT FOR GROWTH",
    description: "A solid foundation that can evolve as your business grows, from new pages to integrations and future features.",
  },
  {
    title: "WE HANDLE THE TECH",
    description: "Design, development, deployment, performance, and all the technical details are completely handled by us.",
  },
];

const traditionalSearchFeatures = [
  "Technical SEO & site architecture",
  "Search friendly content structure",
  "Performance & fast load speeds",
  "Local visibility & discoverability",
  "Structured data & schema markup",
];

const aiDiscoveryFeatures = [
  "Content structure & entity clarity",
  "Semantic optimization for AI models",
  "AI answer engine visibility",
  "Machine readable knowledge data",
];

const automationExamples = [
  "Lead follow ups & customer inquiries",
  "Appointment & booking workflows",
  "Data entry & spreadsheet sync",
  "Invoices & customer notifications",
  "Reports & status updates",
  "CRM updates & customer records",
  "Connecting the tools your business already uses",
];

export default function Services() {
  return (
    <>
      {/* Header Section */}
      <Section className="bg-transparent pt-20 md:pt-32 pb-16">
        <Container className="max-w-4xl">
          <ScrollReveal direction="up" distance={40} delay={0.1} playOnMount={true}>
            <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
              STUDIO SERVICES
            </span>
            
            <h1 className="text-h1 mb-6">
              WE BUILD THE DIGITAL SIDE OF YOUR BUSINESS.
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm font-mono text-brand mb-6 uppercase tracking-wider font-semibold">
              <span>• Websites that win trust</span>
              <span>• Systems that save time</span>
              <span>• Visibility that brings people in</span>
            </div>

            <p className="text-body-lg">
              We help businesses build a stronger presence online, from a website that turns visitors into customers to the systems and search strategy that help you grow beyond it.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Services Grid Section */}
      <Section className="bg-transparent pb-16 md:pb-24">
        <Container className="max-w-5xl">
          <StaggerReveal className="space-y-12 md:space-y-16">
            
            {/* 01: CUSTOM WEB DESIGN & DEVELOPMENT (FLAGSHIP) */}
            <div
              id="web-design"
              className="stagger-item relative flex flex-col p-8 sm:p-10 md:p-14 rounded-3xl border border-brand/40 bg-surface/90 backdrop-blur-md shadow-xl shadow-brand/5 hover:border-brand/60 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Flagship Accent Gradient */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-80" />

              {/* Card Header & Title */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-border mb-8">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-brand font-mono text-4xl md:text-5xl font-bold">
                      / 01
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand/30 bg-brand-soft text-[10px] font-mono font-semibold uppercase tracking-widest text-brand">
                      FLAGSHIP OFFERING
                    </span>
                  </div>
                  <h2 className="text-h2 uppercase">
                    Custom Web Design & Development
                  </h2>
                  <p className="text-xl md:text-2xl font-heading font-semibold text-brand">
                    A website built to win you business.
                  </p>
                </div>

                <div className="pt-2 md:pt-0">
                  <Link
                    href="/contact?service=web-design"
                    className="inline-flex items-center justify-center h-14 px-8 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-brand text-white hover:bg-brand-hover shadow-lg"
                  >
                    LET'S BUILD YOUR WEBSITE &rarr;
                  </Link>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-10 text-body-lg text-foreground font-normal leading-relaxed max-w-3xl">
                <p>
                  Your website is often the first impression someone has of your business. We design and build fast, modern websites that make your brand look credible, explain what you do clearly, and give customers a reason to take the next step.
                </p>
                <p className="text-body text-muted">
                  From the first design to the final launch, we handle everything so you get a website that doesn't just look good, but actually works for your business.
                </p>
              </div>

              {/* Deliverables Section: WHAT YOU GET */}
              <div className="pt-8 border-t border-border">
                <h3 className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-6">
                  WHAT YOU GET
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webDevDeliverables.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-2xl border border-border/60 bg-surface-muted/50 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono font-bold tracking-wider text-brand mb-2">
                          // {item.title}
                        </div>
                        <p className="text-body-sm text-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 02: SEO & GEO */}
            <div
              id="seo-geo"
              className="stagger-item relative flex flex-col p-8 sm:p-10 md:p-12 rounded-3xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none hover:border-brand/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-border mb-8">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-brand/40 font-mono text-4xl md:text-5xl font-bold">
                      / 02
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border bg-surface-muted text-[10px] font-mono font-semibold uppercase tracking-widest text-muted">
                      SEARCH & AI VISIBILITY
                    </span>
                  </div>
                  <h2 className="text-h3 uppercase text-foreground">
                    SEO & GEO
                  </h2>
                  <p className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                    Be found when people are looking for you.
                  </p>
                </div>

                <div className="pt-2 md:pt-0">
                  <Link
                    href="/contact?service=seo-geo"
                    className="inline-flex items-center justify-center h-12 px-6 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full border border-border bg-surface-muted text-foreground hover:border-brand"
                  >
                    INQUIRE ABOUT SEO & GEO &rarr;
                  </Link>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-8 text-body-lg text-foreground leading-relaxed max-w-3xl">
                <p>
                  Having a great business isn't enough if potential customers can't find you.
                </p>
                <p className="text-body text-muted">
                  We help businesses improve how they appear across Google and the growing number of AI search and answer tools so your business has a better chance of being discovered when someone is ready to buy.
                </p>
              </div>

              {/* Two Sides: SEARCH & AI DISCOVERY */}
              <div className="pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* SEARCH */}
                <div className="p-6 rounded-2xl border border-border/60 bg-surface-muted/40 space-y-4">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-brand uppercase block mb-1">
                      // SEARCH
                    </span>
                    <p className="text-body-sm font-medium text-foreground">
                      Improve your website's visibility on Google and traditional search engines.
                    </p>
                  </div>
                  <ul className="space-y-2 pt-2 border-t border-border/40">
                    {traditionalSearchFeatures.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI DISCOVERY */}
                <div className="p-6 rounded-2xl border border-border/60 bg-surface-muted/40 space-y-4">
                  <div>
                    <span className="text-xs font-mono font-bold tracking-wider text-brand uppercase block mb-1">
                      // AI DISCOVERY
                    </span>
                    <p className="text-body-sm font-medium text-foreground">
                      Make your business easier for AI search and answer engines to understand and reference.
                    </p>
                  </div>
                  <ul className="space-y-2 pt-2 border-t border-border/40">
                    {aiDiscoveryFeatures.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="p-4 rounded-xl border border-brand/20 bg-brand-soft/40 text-center">
                <p className="text-xs sm:text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
                  Because search is changing. Your website should change with it.
                </p>
              </div>
            </div>

            {/* 03: WORKFLOW AUTOMATION (IN DEVELOPMENT / COMING SOON) */}
            <div
              id="automation"
              className="stagger-item relative flex flex-col p-8 sm:p-10 md:p-12 rounded-3xl border border-border/70 bg-surface/50 backdrop-blur-md opacity-95 hover:opacity-100 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-border/60 mb-8">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-brand/40 font-mono text-4xl md:text-5xl font-bold">
                      / 03
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      BUILDING NEXT // COMING SOON
                    </span>
                  </div>
                  <h2 className="text-h3 uppercase text-foreground">
                    Workflow Automation
                  </h2>
                  <p className="text-xl md:text-2xl font-heading font-semibold text-foreground">
                    Less busywork. More business.
                  </p>
                </div>

                <div className="pt-2 md:pt-0">
                  <AutomationNotifyTrigger />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-8 text-body-lg text-foreground leading-relaxed max-w-3xl">
                <p className="font-medium text-brand">
                  Stop doing manually what your business can do automatically.
                </p>
                <p>
                  Your team shouldn't have to spend hours copying data, sending repetitive emails, updating spreadsheets, or moving information between different tools.
                </p>
                <p className="text-body text-muted">
                  We're building custom automation solutions that connect the systems you already use and take repetitive work off your plate.
                </p>
              </div>

              {/* Position Banner */}
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 mb-8">
                <p className="text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">
                  // WE'RE BUILDING THIS NEXT. Custom automation for businesses that want to spend less time on repetitive work and more time growing.
                </p>
              </div>

              {/* Deliverables List: WHAT WE'LL AUTOMATE */}
              <div className="pt-6 border-t border-border/60">
                <h3 className="text-xs font-mono font-semibold tracking-widest text-muted uppercase mb-4">
                  WHAT WE'LL AUTOMATE
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {automationExamples.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-body-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </StaggerReveal>
        </Container>
      </Section>

      {/* Consultation Section */}
      <Section className="bg-transparent border-t border-border py-24">
        <Container className="max-w-4xl text-center">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
              COLLABORATION
            </span>
            <h2 className="text-h2 mb-4">SCHEDULE A CONSULTATION</h2>
            <p className="text-body-lg mb-12 max-w-xl mx-auto">
              Ready to build a website that wins business or get found on search & AI tools? Pick a time directly on our calendar.
            </p>
            <div className="rounded-2xl border border-border bg-surface backdrop-blur-md p-4 w-full">
              <CalEmbed />
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
