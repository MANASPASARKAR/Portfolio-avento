import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import projectsData from "@/content/projects.json";
import testimonialsData from "@/content/testimonials.json";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export const metadata = {
  title: "Projects | Agency Portfolio",
  description: "Explore our recent web design and automation projects.",
};

export default function Projects() {
  return (
    <>
      <Section className="bg-neutral-50 dark:bg-neutral-950 pt-24 md:pt-32 pb-16">
        <Container>
          <ScrollReveal direction="up" distance={40} delay={0.2} playOnMount={true}>
            <div className="max-w-3xl mb-12">
              <h1 className="text-h1 mb-6">Our Work</h1>
              <p className="text-body-lg">
                A selection of our recent projects, from high-performance marketing sites to complex operational automation systems.
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {projectsData.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="stagger-item group flex flex-col rounded-2xl overflow-hidden border border-border bg-background transition-colors hover:border-primary/50">
                <div className="aspect-video bg-neutral-200 dark:bg-neutral-800 relative w-full flex items-center justify-center text-neutral-400 overflow-hidden">
                  <ParallaxImage speed={0.15}>
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                      <span>[Image Placeholder: {project.image}]</span>
                    </div>
                  </ParallaxImage>
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-h3 mb-3 group-hover:text-primary transition-colors">{project.title}</h2>
                  <p className="text-body mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-xs font-medium bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-md text-neutral-600 dark:text-neutral-300">
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

      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 mb-4">Client Testimonials</h2>
            <p className="text-body">What our partners have to say about working with us.</p>
          </div>
          
          <ScrollReveal direction="up" distance={40}>
            <TestimonialCarousel testimonials={testimonialsData} />
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
