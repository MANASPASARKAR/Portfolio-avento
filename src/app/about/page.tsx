import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";

export const metadata = {
  title: "About Us | Agency Portfolio",
  description: "Learn more about our digital agency, mission, and team.",
};

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Sam Smith",
    role: "Head of Design",
    location: "London, UK",
  },
  {
    id: 3,
    name: "Taylor Lee",
    role: "Automation Specialist",
    location: "Toronto, CA",
  },
];

export default function About() {
  return (
    <>
      <Section className="bg-neutral-50 dark:bg-neutral-950 pt-24 md:pt-32 pb-16">
        <Container className="max-w-3xl">
          <ScrollReveal direction="up" distance={40} delay={0.2} playOnMount={true}>
            <h1 className="text-h1 mb-6">About Our Agency</h1>
            <p className="text-body-lg mb-8">
              [Placeholder Company Story] We are a team of passionate developers, designers, and strategists dedicated to helping businesses navigate the digital landscape. Since our founding, we've focused on delivering high-quality web solutions and streamlined automation systems that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12 pt-12 border-t border-border">
              <div className="flex-1">
                <h2 className="text-h4 mb-3">Our Mission</h2>
                <p className="text-body-sm">
                  [Placeholder Mission] To empower organizations with scalable technology and intuitive design, making complex processes simple and efficient.
                </p>
              </div>
              <div className="flex-1">
                <h2 className="text-h4 mb-3">Our Vision</h2>
                <p className="text-body-sm">
                  [Placeholder Vision] To be the leading digital partner for forward-thinking brands, setting new standards in web performance and operational automation.
                </p>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-border">
              <h2 className="text-h4 mb-3">When We Started</h2>
              <p className="text-body-sm">
                [Placeholder Founding Info] Founded in 2020 out of a shared passion for clean code and efficient systems, we've grown from a two-person operation to a global remote team serving clients worldwide.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Meet the Team</h2>
            <p className="text-body">The experts behind the pixels and logic.</p>
          </div>
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="stagger-item flex flex-col text-center p-6 rounded-2xl border border-border bg-background shadow-sm">
                <div className="w-24 h-24 mx-auto bg-neutral-200 dark:bg-neutral-800 rounded-full mb-4 flex items-center justify-center text-xs text-neutral-400">
                  [Photo]
                </div>
                <h3 className="text-h4 text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-body-sm text-xs">{member.location}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-950 pb-24">
        <Container className="text-center">
          <p className="text-body-sm">
            Please review our <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> for detailed information regarding our policies and engagements.
          </p>
        </Container>
      </Section>
    </>
  );
}
