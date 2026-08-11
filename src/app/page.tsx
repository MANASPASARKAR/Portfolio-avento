import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import servicesData from "@/content/services.json";
import projectsData from "@/content/projects.json";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { StaggerReveal } from "@/components/animations/stagger-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-950 pt-24 md:pt-32 pb-16 md:pb-24">
        <Container className="text-center max-w-4xl">
          <ScrollReveal direction="up" distance={40} delay={0.2} playOnMount={true}>
            <h1 className="text-h1 mb-6">
              We Build Digital Experiences That Scale
            </h1>
            <p className="text-body-lg mb-10 max-w-2xl mx-auto">
              A boutique digital agency specializing in high-performance web design and custom automation workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-8 text-base font-medium transition-colors rounded-md bg-primary text-white hover:bg-primary-hover shadow-sm"
              >
                Start a Project
              </Link>
              <Link 
                href="/projects"
                className="inline-flex items-center justify-center h-11 px-8 text-base font-medium transition-colors rounded-md border border-border bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-foreground"
              >
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* What We Do */}
      <Section className="bg-surface">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 mb-4">Our Services</h2>
            <p className="text-body">Strategic solutions designed to eliminate friction and accelerate your growth.</p>
          </div>
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="stagger-item p-8 rounded-2xl border border-border bg-background shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="text-h4 mb-3">{service.title}</h3>
                <p className="text-body-sm">{service.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-neutral-50 dark:bg-neutral-950">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-h2 mb-4">Selected Work</h2>
              <p className="text-body max-w-2xl">A look at some of our recent projects and technical implementations.</p>
            </div>
            <Link 
              href="/projects"
              className="text-primary font-medium hover:underline"
            >
              View All Projects &rarr;
            </Link>
          </div>
          
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="stagger-item group flex flex-col rounded-2xl overflow-hidden border border-border bg-background transition-colors hover:border-primary/50">
                <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 relative w-full flex items-center justify-center text-neutral-400 overflow-hidden">
                  <ParallaxImage speed={0.15}>
                    <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
                      <span>[Image Placeholder]</span>
                    </div>
                  </ParallaxImage>
                </div>
                <div className="p-6">
                  <h3 className="text-h4 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-body-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs font-medium bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md text-neutral-600 dark:text-neutral-300">
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

      {/* CTA Section */}
      <Section className="bg-primary-950 text-white">
        <Container className="text-center max-w-3xl">
          <ScrollReveal direction="up" distance={30}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to scale your business?</h2>
            <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Book a discovery call today to discuss how our web design and automation services can help you achieve your goals.
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium transition-colors rounded-md bg-white text-primary-950 hover:bg-neutral-100 shadow-sm"
            >
              Book a Call
            </Link>
          </ScrollReveal>
        </Container>
      </Section>
    </>
  );
}
