import Link from "next/link"
import { Container } from "@/components/ui/container"

const footerLinks = {
  services: [
    { name: "Web Design", href: "/services#web-design" },
    { name: "Automation", href: "/services#automation" },
    { name: "SEO & Content", href: "/services#seo" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
  ]
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-neutral-50 dark:bg-neutral-950 mt-auto">
      <Container>
        <div className="py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="md:col-span-1 flex flex-col">
            <Link href="/" className="font-heading text-xl font-bold tracking-tight mb-4 inline-block">
              [Agency Logo]
            </Link>
            <p className="text-body-sm mb-6 max-w-xs">
              We build high-performance websites and automated systems to help your business scale efficiently.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} [Agency Name]. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-body-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-body-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
