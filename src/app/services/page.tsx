import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import servicesData from "@/content/services.json";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { CalEmbed } from "@/components/ui/cal-embed";

export const metadata = {
  title: "Services | Agency Portfolio",
  description: "Web design and automation services tailored for your business.",
};

export default function Services() {
  return (
    <>
      <Section className="bg-neutral-50 dark:bg-neutral-950 pt-24 md:pt-32 pb-16">
        <Container className="max-w-3xl">
          <ScrollReveal direction="up" distance={40} delay={0.2} playOnMount={true}>
            <h1 className="text-h1 mb-6">Our Services</h1>
            <p className="text-body-lg">
              We provide specialized digital services that help businesses scale without the growing pains. From conversion-optimized websites to custom automation workflows, we build systems that work for you.
            </p>
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="bg-surface pb-16 md:pb-24">
        <Container className="max-w-4xl">
          <StaggerReveal className="space-y-12">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="stagger-item flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-3xl border border-border bg-background"
              >
                <div className="md:w-1/3">
                  <div className="text-primary/20 font-heading text-5xl font-bold mb-4">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <h2 className="text-h3">{service.title}</h2>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <p className="text-body-lg mb-6">{service.description}</p>
                  <p className="text-body mb-6">
                    [Placeholder extended details] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <li className="flex items-center gap-2 text-body-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      [Feature 1]
                    </li>
                    <li className="flex items-center gap-2 text-body-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      [Feature 2]
                    </li>
                    <li className="flex items-center gap-2 text-body-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      [Feature 3]
                    </li>
                    <li className="flex items-center gap-2 text-body-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      [Feature 4]
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-950 border-t border-border">
        <Container className="max-w-4xl text-center">
          <ScrollReveal direction="up" distance={40}>
            <h2 className="text-h2 mb-4">Book Our Services</h2>
            <p className="text-body-lg mb-10">
              Ready to streamline your operations or overhaul your digital presence? We're currently taking on new projects.
            </p>
            <div className="p-8 rounded-2xl border border-border bg-background mb-12">
              <h3 className="text-h4 mb-4">Project Inquiry Form</h3>
              <p className="text-body-sm mb-6 max-w-lg mx-auto">
                [Placeholder - In Phase 6, a detailed onboarding/booking form embed will go here]
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 text-base font-medium transition-colors rounded-md bg-primary text-white hover:bg-primary-hover shadow-sm"
              >
                Go to Contact Form
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" distance={40}>
            <h2 className="text-h2 mt-16 mb-4">Schedule a Meeting</h2>
            <p className="text-body-lg mb-10">
              Prefer to chat first? Book a quick 15-minute discovery call directly on our calendar.
            </p>
            <div className="rounded-2xl border border-border bg-background w-full">
              <CalEmbed />
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
