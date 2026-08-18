import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import servicesData from "@/content/services.json";
import projectsData from "@/content/projects.json";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { PortfolioStack } from "@/components/ui/portfolio-stack";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-transparent pt-20 md:pt-32 pb-24 md:pb-36 min-h-[85vh] flex items-center">
        <Container className="max-w-6xl">
          <ScrollReveal direction="up" distance={40} delay={0.1} playOnMount={true}>
            <div className="flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand/30 bg-brand-soft text-xs font-mono font-semibold uppercase tracking-widest text-brand mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Creative Web Studio & Automation Architecture
              </span>
              
              <h1 className="text-hero mb-8">
                We Build <br className="hidden sm:inline" />
                Digital Experiences <br />
                <span className="bg-gradient-to-r from-foreground via-foreground to-brand bg-clip-text text-transparent">
                  People Remember.
                </span>
              </h1>
              
              <p className="text-body-lg mb-12 max-w-2xl font-normal leading-relaxed">
                A high-performance digital engineering studio. We merge editorial design, motion physics, and custom automation architecture for ambitious brands.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center h-14 px-9 text-sm font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-foreground text-background hover:bg-brand hover:text-white shadow-lg"
                >
                  Start a Project
                </Link>
                <Link 
                  href="/projects"
                  className="inline-flex items-center justify-center h-14 px-9 text-sm font-semibold uppercase tracking-widest transition-all duration-300 rounded-full border border-border bg-surface-muted text-foreground hover:border-brand"
                >
                  Explore Portfolio &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Selected Work Portfolio Presentation */}
      <Section className="bg-transparent py-24 md:py-36">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6 border-b border-border pb-10">
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
                SELECTED WORK
              </span>
              <h2 className="text-h1">OUR PORTFOLIO</h2>
            </div>
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors"
            >
              View All Work ({projectsData.length}) &rarr;
            </Link>
          </div>
          
          <PortfolioStack projects={projectsData} />
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="bg-transparent py-24 md:py-36">
        <Container className="max-w-6xl">
          <div className="border-b border-border pb-10 mb-16">
            <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
              CAPABILITIES
            </span>
            <h2 className="text-h1">SERVICES & ARCHITECTURE</h2>
          </div>

          <div className="divide-y divide-border">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className="group py-12 md:py-16 transition-all duration-500 hover:px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-6 md:gap-8">
                  <div className="md:col-span-2 font-mono text-sm text-muted group-hover:text-brand transition-colors flex items-center gap-2">
                    / 0{(index + 1).toString()}
                  </div>
                  <div className="md:col-span-5 space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-h3 group-hover:text-brand transition-colors">
                        {service.title}
                      </h3>
                      {!service.isAvailable && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                          IN DEVELOPMENT
                        </span>
                      )}
                    </div>
                    {service.subtitle && (
                      <p className="text-xs font-mono font-semibold text-brand uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-5 flex flex-col justify-between">
                    <p className="text-body mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-foreground transition-colors"
                    >
                      Explore Service <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA / Closing Section */}
      <Section className="bg-transparent py-28 md:py-44">
        <Container className="text-center max-w-4xl">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-6 block">
              START A CONVERSATION
            </span>
            <h2 className="text-hero mb-10">
              LET’S BUILD <br />
              SOMETHING GREAT.
            </h2>
            <p className="text-body-lg mb-12 max-w-xl mx-auto">
              Have a custom project in mind? We're taking on select clients for website design, creative development, and automation architecture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-10 text-sm font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-brand text-white hover:bg-brand-hover shadow-lg"
              >
                Get in Touch
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center h-14 px-10 text-sm font-semibold uppercase tracking-widest transition-all duration-300 rounded-full border border-border bg-surface-muted text-foreground hover:border-brand"
              >
                Book Discovery Call
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}



