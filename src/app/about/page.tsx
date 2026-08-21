import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";

export const metadata = {
  title: "About | AVENTO",
  description: "Learn how AVENTO designs and engineers custom digital experiences that help businesses build trust, communicate value, and scale.",
};

const teamMembers = [
  {
    id: 1,
    name: "Geet Lunkad",
    role: "CEO, CO-FOUNDER",
    initials: "GL",
  },
  {
    id: 2,
    name: "Manas Pasarkar",
    role: "CTO, CO-FOUNDER",
    initials: "MP",
  },
  {
    id: 3,
    name: "Heavenlight Makonge",
    role: "CMO, OUTREACH MANAGER",
    initials: "HM",
  },
];

export default function About() {
  return (
    <>
      {/* Hero & Company Intro */}
      <Section className="bg-transparent pt-20 md:pt-32 pb-16 md:pb-24">
        <Container className="max-w-4xl">
          <ScrollReveal direction="up" distance={40} delay={0.1} playOnMount={true}>
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block font-mono">
              ABOUT AVENTO
            </span>
            <h1 className="text-h1 mb-8 leading-tight">
              WE BUILD THE DIGITAL SIDE OF YOUR BUSINESS.
            </h1>
            <p className="text-body-lg text-foreground mb-8 leading-relaxed font-normal">
              Your business deserves a better first impression. A website isn&apos;t just something a business &ldquo;needs to have&rdquo;&mdash;it is where potential customers decide whether they trust you, understand your offer, and take the next step.
            </p>
            <div className="space-y-6 text-body text-muted leading-relaxed font-normal max-w-3xl border-l-2 border-brand/40 pl-6 my-10">
              <p>
                Avento helps businesses turn their online presence into something that actually works for them. We design and build custom websites that make businesses easier to understand, easier to trust, and easier to choose.
              </p>
              <p>
                From the first idea to the final launch, we combine thoughtful design, modern engineering, and business-focused thinking to create digital experiences that look distinctive and perform properly.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Featured Philosophy Statement */}
      <Section className="bg-transparent py-12">
        <Container className="max-w-4xl">
          <ScrollReveal direction="up" distance={30}>
            <div className="p-8 md:p-12 rounded-3xl border border-brand/30 bg-surface/80 backdrop-blur-md relative overflow-hidden shadow-sm dark:shadow-none">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
              <span className="text-xs font-mono text-brand uppercase tracking-widest block mb-4">
                OUR APPROACH
              </span>
              <blockquote className="text-h2 text-foreground font-heading mb-6 leading-snug">
                &ldquo;We don&apos;t start with a template. <br className="hidden sm:inline" />
                We start with the business.&rdquo;
              </blockquote>
              <p className="text-body text-muted leading-relaxed max-w-2xl">
                A website should do more than look impressive. It should explain what the business does, build trust quickly, establish credibility, guide visitors toward action, load fast, and provide a reliable foundation for future growth.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Why Choose AVENTO & Anti-Template Differentiators */}
      <Section className="bg-transparent py-20 border-t border-border">
        <Container className="max-w-5xl">
          <ScrollReveal direction="up" distance={30} className="mb-16">
            <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
              WHY AVENTO?
            </span>
            <h2 className="text-h2 mb-4">
              WE DON&apos;T BUILD WEBSITES TO FILL A CHECKLIST.
            </h2>
            <p className="text-body text-muted max-w-3xl leading-relaxed">
              There are plenty of ways to get a website online. Buying a template is one of them. But businesses don&apos;t need another website that simply exists&mdash;they need a digital presence that represents the quality of what they actually do.
            </p>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/40">
              <span className="text-xs font-mono text-brand mb-3 block font-semibold">
                01 / BUILT AROUND YOUR BUSINESS
              </span>
              <h3 className="text-h3 mb-3">Custom Strategy</h3>
              <p className="text-body text-muted leading-relaxed">
                Most template-based agencies start with &ldquo;Which template do you want?&rdquo; We start with &ldquo;What does your business need this website to achieve?&rdquo; The design, structure, and user journey are built directly around your goals and your customers.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/40">
              <span className="text-xs font-mono text-brand mb-3 block font-semibold">
                02 / NO TEMPLATE FLIPPING
              </span>
              <h3 className="text-h3 mb-3">Distinct Digital Identity</h3>
              <p className="text-body text-muted leading-relaxed">
                We don&apos;t take the same template, change the logo, and call it a custom website. Every website is designed from scratch around the brand so your result feels like your business, not something a potential customer has already seen ten times.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/40">
              <span className="text-xs font-mono text-brand mb-3 block font-semibold">
                03 / DESIGN THAT IS ACTUALLY ENGINEERED
              </span>
              <h3 className="text-h3 mb-3">Design + Engineering</h3>
              <p className="text-body text-muted leading-relaxed">
                A beautiful website means very little if it is slow, broken on mobile, difficult to use, or impossible to grow. We care about both sides equally, ensuring the visual experience and the underlying code work together seamlessly.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/40">
              <span className="text-xs font-mono text-brand mb-3 block font-semibold">
                04 / WE BUILD FOR THE NEXT STEP
              </span>
              <h3 className="text-h3 mb-3">Foundation For Growth</h3>
              <p className="text-body text-muted leading-relaxed">
                The website shouldn&apos;t become a dead end after launch. We build strong technical foundations so your business can later expand into new services, e-commerce, custom integrations, automation, analytics, SEO, and AI discovery.
              </p>
            </div>
          </StaggerReveal>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="bg-transparent py-20 border-t border-border">
        <Container className="max-w-5xl">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block font-mono">
              THE PEOPLE BEHIND AVENTO
            </span>
            <h2 className="text-h2 mb-4">DIRECT & FOCUSED</h2>
            <p className="text-body-lg text-foreground font-medium mb-4">
              Small team. Direct communication. Serious attention to detail.
            </p>
            <p className="text-body text-muted leading-relaxed">
              When you work with Avento, you work directly with the people actually designing, building, and shaping your website. No giant chain of account managers, no disappearing into a ticketing system, and no passing your project through five different departments.
            </p>
          </div>
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="stagger-item flex flex-col items-center text-center p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/40"
              >
                <div className="w-20 h-20 rounded-full bg-brand-soft border border-brand/30 mb-6 flex items-center justify-center font-heading font-bold text-brand text-xl tracking-wider">
                  {member.initials}
                </div>
                <h3 className="text-h4 text-lg mb-1">{member.name}</h3>
                <p className="text-brand text-xs font-semibold uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-transparent pb-28 pt-8">
        <Container className="text-center max-w-2xl">
          <p className="text-body-sm text-muted mb-6">
            Learn more about our studio engagement policies on our{" "}
            <Link href="/terms" className="text-brand hover:underline font-semibold">
              Terms &amp; Conditions
            </Link>{" "}
            page.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-brand text-white hover:bg-brand-hover shadow-lg"
            >
              Start a Project
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full border border-border bg-surface-muted text-foreground hover:border-brand"
            >
              Explore Services &rarr;
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
