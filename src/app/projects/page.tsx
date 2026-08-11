import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import projectsData from "@/content/projects.json";
import testimonialsData from "@/content/testimonials.json";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export const metadata = {
  title: "Selected Work",
  description: "Explore our recent web engineering, design systems, and workflow automation implementations.",
};

export default function Projects() {
  return (
    <>
      <Section className="bg-transparent pt-20 md:pt-32 pb-16">
        <Container>
          <ScrollReveal direction="up" distance={40} delay={0.1} playOnMount={true}>
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
                PORTFOLIO
              </span>
              <h1 className="text-h1 mb-6">SELECTED WORK</h1>
              <p className="text-body-lg">
                A showcase of custom digital experiences, editorial design systems, and enterprise automation infrastructure built for client scale.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projectsData.map((project, index) => (
              <Link 
                href={`/projects/${project.slug}`} 
                key={project.slug} 
                className="stagger-item group flex flex-col rounded-2xl overflow-hidden border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-500 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="aspect-[16/10] bg-surface-muted relative w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-muted mb-4">
                      <span>PROJECT 0{index + 1}</span>
                      <span>{project.slug}</span>
                    </div>
                    <h2 className="text-h3 mb-3 group-hover:text-brand transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-body mb-6 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 rounded-full border border-border text-foreground bg-surface-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </StaggerReveal>

        </Container>
      </Section>

      <Section className="bg-transparent py-24 border-t border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
              TESTIMONIALS
            </span>
            <h2 className="text-h2 mb-4">CLIENT FEEDBACK</h2>
            <p className="text-body">What leading teams say about partnering with AVENTO.</p>
          </div>
          
          <ScrollReveal direction="up" distance={30}>
            <TestimonialCarousel testimonials={testimonialsData} />
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}


