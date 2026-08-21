import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Privacy Policy | AVENTO",
  description: "Privacy policy detailing how AVENTO collects, uses, and protects personal data in compliance with applicable laws.",
};

export default function Privacy() {
  return (
    <Section className="bg-transparent pt-20 md:pt-32 pb-24">
      <Container className="max-w-4xl">
        <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
          LEGAL &amp; PRIVACY
        </span>
        <h1 className="text-h1 mb-4">PRIVACY POLICY</h1>
        <p className="text-body-lg text-foreground font-medium mb-3">
          How Avento collects, protects, and handles personal data submitted through our website and client engagements.
        </p>
        <p className="text-body-sm text-muted font-mono mb-12 border-b border-border pb-6">
          Last updated: August 21, 2026
        </p>

        <div className="space-y-8 text-body text-muted leading-relaxed font-normal">
          <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md">
            <h2 className="text-h3 text-foreground mb-4">1. Data We Collect</h2>
            <p className="mb-4">
              We collect information that you voluntarily provide to us when inquiring about our Services, booking discovery calls, or submitting contact forms. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Contact details (name, email address, phone number)</li>
              <li>Company or organization name and website URL</li>
              <li>Project briefs, service requirements, and budget ranges</li>
              <li>Technical usage data (IP address, browser type, device metadata)</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md">
            <h2 className="text-h3 text-foreground mb-4">2. How We Use Data</h2>
            <p className="mb-4">
              We process personal data solely for legitimate business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Responding to project inquiries and scheduling discovery consultations</li>
              <li>Preparing project proposals, Statements of Work, and invoices</li>
              <li>Fulfilling agreed digital design, development, and support engagements</li>
              <li>Maintaining website performance, security, and spam prevention</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md">
            <h2 className="text-h3 text-foreground mb-4">3. Legal Basis & Data Rights (India DPDP Act)</h2>
            <p className="mb-4">
              Where applicable under India&apos;s Digital Personal Data Protection Act (DPDP Act 2023) and notified implementation rules, data principals have rights to request notice, access, correction, erasure, and grievance redressal regarding their personal data.
            </p>
            <p>
              We do not sell, rent, or trade personal information to third-party marketing companies. Personal data is shared only with trusted infrastructure providers (such as hosting, email delivery, or payment processors) necessary to deliver our Services.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md">
            <h2 className="text-h3 text-foreground mb-4">4. Cookies & Analytics</h2>
            <p>
              Our website uses privacy-respecting, essential cookies and aggregated website analytics to optimize page load speeds and analyze traffic patterns without tracking individuals across third-party sites.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md">
            <h2 className="text-h3 text-foreground mb-4">5. Contact Information</h2>
            <p className="mb-4">
              For any data access, correction, or privacy inquiries, please contact our Data Protection contact:
            </p>
            <div className="p-4 rounded-xl border border-border bg-surface-muted/50 font-mono text-sm space-y-1 text-foreground">
              <p><strong>Avento Studio</strong></p>
              <p>Legal Entity: [LEGAL ENTITY NAME]</p>
              <p>Email: <a href="mailto:[OFFICIAL EMAIL]" className="text-brand hover:underline">[OFFICIAL EMAIL]</a></p>
              <p>Address: [BUSINESS ADDRESS]</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/terms" className="text-brand hover:underline text-body-sm font-semibold">
            &larr; Return to Terms of Service
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-6 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-brand text-white hover:bg-brand-hover shadow-md"
          >
            Contact Studio
          </Link>
        </div>
      </Container>
    </Section>
  );
}
