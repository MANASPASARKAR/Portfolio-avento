import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";

export const metadata = {
  title: "About Studio",
  description: "Learn about AVENTO Studio, our engineering philosophy, and our team of digital craftspeople.",
};

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & Lead Architect",
    location: "New York, USA",
    initials: "AJ",
  },
  {
    id: 2,
    name: "Sam Smith",
    role: "Head of Editorial Design",
    location: "London, UK",
    initials: "SS",
  },
  {
    id: 3,
    name: "Taylor Lee",
    role: "Automation & Systems Lead",
    location: "Toronto, CA",
    initials: "TL",
  },
];

export default function About() {
  return (
    <>
      <Section className="bg-transparent pt-20 md:pt-32 pb-20">
        <Container className="max-w-4xl">
          <ScrollReveal direction="up" distance={40} delay={0.1} playOnMount={true}>
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
              ABOUT AVENTO
            </span>
            <h1 className="text-h1 mb-8">DIGITAL CRAFT WITH PURPOSE.</h1>
            <p className="text-body-lg text-foreground mb-12 leading-relaxed">
              We are a remote-first digital studio dedicated to engineering high-performance web applications and automated business workflows. We operate at the intersection of bold editorial aesthetic and precision software architecture.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-border">
            <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none">
              <span className="text-xs font-mono text-brand mb-2 block">01 / OUR MISSION</span>
              <h2 className="text-h3 mb-4">ENGINEERING EXCELLENCE</h2>
              <p className="text-body text-muted">
                To build web software that scales effortlessly, loads instantly, and delivers uncompromised visual sophistication for growth-oriented brands.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none">
              <span className="text-xs font-mono text-brand mb-2 block">02 / OUR VISION</span>
              <h2 className="text-h3 mb-4">AUTOMATED SCALE</h2>
              <p className="text-body text-muted">
                To eliminate manual operational friction through custom software integrations, giving leadership teams freedom to focus on core innovation.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-transparent py-20 border-t border-border">
        <Container className="max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
              THE DISCIPLINE
            </span>
            <h2 className="text-h2 mb-4">TEAM & LEADERSHIP</h2>
            <p className="text-body">The engineers and designers shaping our studio work.</p>
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
                <p className="text-brand text-xs font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-body-sm text-xs text-muted">{member.location}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </Section>

      <Section className="bg-transparent pb-24">
        <Container className="text-center max-w-2xl">
          <p className="text-body-sm text-muted">
            Learn more about our engagement policies on our{" "}
            <Link href="/terms" className="text-brand hover:underline font-semibold">
              Terms & Conditions
            </Link>{" "}
            page.
          </p>
        </Container>
      </Section>
    </>
  );
}



