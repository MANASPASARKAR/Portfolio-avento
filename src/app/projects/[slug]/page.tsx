import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import projectsData from "@/content/projects.json";
import { StaggerReveal } from "@/components/animations/stagger-reveal";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  
  return {
    title: `${project.title} | AVENTO Studio`,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <Section className="bg-transparent pt-20 md:pt-32 pb-24">
      <Container className="max-w-5xl">
        <StaggerReveal>
          <div className="stagger-item">
            <Link href="/projects" className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-muted hover:text-brand transition-colors mb-10">
              &larr; Back to Selected Work
            </Link>
            
            <h1 className="text-h1 mb-6">{project.title}</h1>
            <p className="text-body-lg text-foreground mb-8 max-w-3xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2.5 mb-12">
              {project.techStack.map(tech => (
                <span key={tech} className="text-xs font-semibold bg-surface-muted border border-border px-4 py-1.5 rounded-full text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="stagger-item aspect-[16/9] w-full bg-surface-muted rounded-2xl mb-16 overflow-hidden relative border border-border shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-border">
            <div className="stagger-item md:col-span-8">
              <h2 className="text-h3 mb-6">CASE OVERVIEW</h2>
              <div className="prose dark:prose-invert max-w-none text-muted space-y-6 text-base leading-relaxed font-normal">
                <p>
                  {project.fullDescription}
                </p>
                <p>
                  Built with modular scalability in mind, this project emphasizes lightning-fast page speed, pixel-perfect interaction physics, and clear content architecture.
                </p>
              </div>
            </div>
            
            <div className="stagger-item md:col-span-4 border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-semibold text-foreground tracking-widest uppercase mb-4">ARCHITECTURE & LINKS</h3>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Repository Source Code
                </a>
              </div>

              <div className="mt-12 pt-6 border-t border-border">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-brand hover:bg-brand-hover transition-colors"
                >
                  Request Similar Project
                </Link>
              </div>
            </div>
          </div>
        </StaggerReveal>
      </Container>
    </Section>


  );
}

