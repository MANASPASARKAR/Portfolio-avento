import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms of engagement and legal policy for AVENTO Studio.",
};

export default function Terms() {
  return (
    <Section className="bg-transparent pt-20 md:pt-32 pb-24">
      <Container className="max-w-4xl">
        <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
          LEGAL & POLICY
        </span>
        <h1 className="text-h1 mb-8">TERMS OF ENGAGEMENT</h1>
        
        <div className="prose dark:prose-invert max-w-none text-muted space-y-8 text-base leading-relaxed">
          <p className="text-body-lg text-foreground font-medium">
            Last updated: January 2026
          </p>
          
          <div>
            <h2 className="text-h3 text-foreground mb-3">1. Scope of Engagement</h2>
            <p>
              All digital design, web engineering, and workflow automation services rendered by AVENTO Studio are governed by mutually executed project scope statements. Deliverables are crafted according to high-performance industry standards.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-foreground mb-3">2. Intellectual Property & Ownership</h2>
            <p>
              Upon final settlement of project invoices, all custom client deliverables, source code repositories, design tokens, and media assets become the exclusive property of the client, unless third-party licensed code applies.
            </p>
          </div>

          <div>
            <h2 className="text-h3 text-foreground mb-3">3. Confidentiality & Data Safety</h2>
            <p>
              AVENTO Studio maintains strict non-disclosure obligations regarding client proprietary algorithms, customer lists, CRM credentials, and internal workflow data exposed during automation setups.
            </p>
          </div>
          
          <div>
            <h2 className="text-h3 text-foreground mb-3">4. Warranty & Support</h2>
            <p>
              All client builds undergo rigorous multi-device verification prior to deployment. Ongoing optimization and API integration monitoring are available under dedicated studio retainer agreements.
            </p>
          </div>
        </div>

      </Container>
    </Section>
  );
}


