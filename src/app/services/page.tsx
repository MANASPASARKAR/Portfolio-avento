import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import servicesData from "@/content/services.json";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { CalEmbed } from "@/components/ui/cal-embed";

export const metadata = {
  title: "Services & Capabilities",
  description: "Bespoke web design, creative frontend development, and custom workflow automation.",
};

const serviceDetails = [
  {
    features: [
      "Custom Editorial & Systemic UI/UX Design",
      "Interactive Prototyping & Motion Specs",
      "Design Systems & Component Specs",
      "Conversion & Performance Optimization",
    ]
  },
  {
    features: [
      "Next.js App Router Architecture",
      "GSAP Motion & Scroll Physics",
      "Headless CMS Integration",
      "WCAG Accessibility Compliance",
    ]
  },
  {
    features: [
      "Custom API & Webhook Bridges",
      "Enterprise CRM Sync (HubSpot / Salesforce)",
      "Automated Order & Inventory Pipelines",
      "Serverless Workflows & Edge Functions",
    ]
  }
];

export default function Services() {
  return (
    <>
      <Section className="bg-transparent pt-20 md:pt-32 pb-16">
        <Container className="max-w-4xl">
          <ScrollReveal direction="up" distance={40} delay={0.1} playOnMount={true}>
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
              CAPABILITIES & SERVICES
            </span>
            <h1 className="text-h1 mb-6">STUDIO SERVICES</h1>
            <p className="text-body-lg">
              We design and engineer bespoke web solutions that eliminate friction, capture audience attention, and automate client operations for maximum scale.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="bg-transparent pb-16 md:pb-24">
        <Container className="max-w-5xl">
          <StaggerReveal className="space-y-12">
            {servicesData.map((service, index) => {
              const details = serviceDetails[index] || serviceDetails[0];
              return (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="stagger-item flex flex-col md:flex-row gap-8 md:gap-16 p-8 md:p-12 rounded-3xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-300"
                >
                  <div className="md:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="text-brand/30 font-mono text-5xl font-bold mb-4">
                        / 0{(index + 1).toString()}
                      </div>
                      <h2 className="text-h3">{service.title}</h2>
                    </div>
                    <div className="hidden md:block pt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand hover:text-brand-hover transition-colors"
                      >
                        Inquire About This Service &rarr;
                      </Link>
                    </div>
                  </div>

                  <div className="md:w-2/3 flex flex-col justify-between">
                    <div>
                      <p className="text-body-lg text-foreground mb-6">
                        {service.description}
                      </p>
                      <p className="text-body text-muted mb-8">
                        Our engineering team collaborates directly with your leadership to turn complex operational objectives into seamless, beautiful digital experiences.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">
                        Key Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {details.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-body-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </StaggerReveal>
        </Container>
      </Section>

      <Section className="bg-transparent border-t border-border py-24">
        <Container className="max-w-4xl text-center">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
              COLLABORATION
            </span>
            <h2 className="text-h2 mb-4">SCHEDULE A CONSULTATION</h2>
            <p className="text-body-lg mb-12 max-w-xl mx-auto">
              Ready to elevate your digital presence or automate internal processes? Pick a time directly on our calendar.
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



