import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = {
  services: [
    { name: "Web Design & Development", href: "/services#web-design" },
    { name: "SEO & GEO", href: "/services#seo-geo" },
    { name: "Workflow Automation", href: "/services#automation" },
  ],
  company: [
    { name: "About Studio", href: "/about" },
    { name: "Selected Work", href: "/projects" },
    { name: "Get in Touch", href: "/contact" },
  ],
  social: [
    { name: "Twitter / X", href: "https://twitter.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "GitHub", href: "https://github.com" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-transparent mt-auto relative z-10">
      <Container>
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <Link href="/" className="group flex items-center gap-2 font-heading text-xl font-bold tracking-wider text-foreground mb-4 inline-flex">
                <span>AVENTO</span>
                <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              </Link>
              <p className="text-body-sm text-muted max-w-xs leading-relaxed">
                Boutique creative web studio crafting digital experiences people remember.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-foreground tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-3.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-sm text-muted hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-foreground tracking-widest uppercase mb-6">Studio</h3>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-sm text-muted hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-semibold text-foreground tracking-widest uppercase mb-6">Connect</h3>
            <ul className="space-y-3.5">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-body-sm text-muted hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} AVENTO Studio. Built with precision & high performance.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms & Privacy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}



