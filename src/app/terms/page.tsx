import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Terms of Service | AVENTO",
  description: "Terms of service and engagement framework for custom digital design, engineering, and automation services by AVENTO.",
};

const sections = [
  {
    id: "01",
    title: "1. ABOUT THESE TERMS",
    content: (
      <>
        <p className="mb-4">
          These Terms of Service (&ldquo;Terms&rdquo;) govern the relationship between Avento (&ldquo;Avento&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and the client (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) when you access our website, purchase, or engage us for digital design, development, optimization, or automation services.
        </p>
        <p className="mb-4">
          In these Terms:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>&ldquo;Services&rdquo;</strong> refers to all digital design, web development, UI/UX, engineering, optimization, automation, maintenance, and consulting services provided by Avento.</li>
          <li><strong>&ldquo;Project&rdquo;</strong> refers to a specific scope of work agreed upon between Avento and the Client.</li>
          <li><strong>&ldquo;Deliverables&rdquo;</strong> refers to the final custom designs, code, assets, and documentation produced for the Client under an agreed Project.</li>
        </ul>
        <p>
          Individual project proposals, Statements of Work (SOWs), quotations, estimates, invoices, or signed service agreements may contain project-specific terms. In the event of any conflict between these general website Terms and a mutually executed project agreement or proposal, the specific project agreement shall govern to the extent of the conflict.
        </p>
      </>
    ),
  },
  {
    id: "02",
    title: "2. SERVICES",
    content: (
      <>
        <p className="mb-4">
          Avento offers custom digital services which may include, but are not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4">
          <li>Custom website design &amp; editorial UI/UX architecture</li>
          <li>Custom web development &amp; frontend engineering</li>
          <li>Responsive multi-device implementation &amp; design system construction</li>
          <li>Headless &amp; traditional Content Management System (CMS) integration</li>
          <li>E-commerce storefront setup &amp; checkout implementation</li>
          <li>Technical Search Engine Optimization (SEO) foundations</li>
          <li>Generative Engine Optimization (GEO) &amp; AI search visibility (where specifically agreed)</li>
          <li>Performance, speed, &amp; core web vitals optimization</li>
          <li>Custom web animations &amp; interactive experiences</li>
          <li>Third-party API integrations &amp; workflow automation</li>
          <li>Ongoing technical maintenance, updates, &amp; retainer support</li>
        </ul>
        <p>
          The specific Services included in any engagement are strictly determined by the mutually agreed Project scope. The listing of a service above does not imply that it is automatically included in every Project.
        </p>
      </>
    ),
  },
  {
    id: "03",
    title: "3. PROJECT SCOPE",
    content: (
      <>
        <p className="mb-4">
          Each Project will be defined by an agreed scope of work detailing key deliverables, target milestones, estimated timelines, revision allowances, technical requirements, integrations, content delivery schedules, and pricing.
        </p>
        <p>
          Any requests, features, modifications, or deliverables outside the agreed Project scope will be considered additional work. Additional work will require separate approval and may result in adjusted fees and updated completion timelines.
        </p>
      </>
    ),
  },
  {
    id: "04",
    title: "4. CLIENT RESPONSIBILITIES",
    content: (
      <>
        <p className="mb-4">
          To ensure timely completion of the Project, the Client agrees to provide all necessary materials, information, and access required by Avento. This includes, but is not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-1.5 mb-4">
          <li>Logos, typography, brand guidelines, and vector assets</li>
          <li>High-resolution imagery, video media, and licensed fonts</li>
          <li>Written copy, product details, pricing, and company disclosures</li>
          <li>Third-party API keys, analytics accounts, and service credentials</li>
          <li>Hosting environment access, DNS/domain access, and repository permissions</li>
          <li>Timely reviews, feedback, and milestone approvals</li>
        </ul>
        <p className="mb-4">
          The Client represents and warrants that it holds all necessary ownership rights, licenses, or permissions for all materials supplied to Avento. Avento assumes no liability for copyright or trademark infringement arising from materials provided by the Client.
        </p>
        <p>
          Delays in providing required client materials, credentials, feedback, or approvals may directly extend target project completion dates.
        </p>
      </>
    ),
  },
  {
    id: "05",
    title: "5. PAYMENTS AND FEES",
    content: (
      <>
        <p className="mb-4">
          Project fees, deposit schedules, milestone payments, and final balances are established in the applicable proposal, invoice, or agreement. Unless specified otherwise:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>An initial non-refundable deposit or milestone fee may be required before Project work commences.</li>
          <li>Invoices are due upon receipt or within the payment terms stated on the invoice.</li>
          <li>Applicable taxes, government duties, or transaction processing fees will be charged as legally required.</li>
          <li>Third-party costs (such as domain registrations, premium plugins, font licenses, SaaS subscriptions, or hosting fees) are separate from Avento&apos;s service fees and remain the Client&apos;s responsibility.</li>
        </ul>
        <p className="mb-4">
          If invoices become overdue, Avento reserves the right to suspend active development, withhold final deliverable deployment, or pause support until all outstanding amounts are paid in full.
        </p>
        <p>
          Refunds and cancellations are subject to the applicable Project agreement and relevant governing law. Payments for completed milestone deliverables are non-refundable once approved.
        </p>
      </>
    ),
  },
  {
    id: "06",
    title: "6. REVISIONS AND CHANGE REQUESTS",
    content: (
      <>
        <p className="mb-4">
          Avento distinguishes between in-scope revisions and scope changes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>In-Scope Revisions:</strong> Minor adjustments, layout refinements, or textual tweaks within the agreed design concept, executed according to the revision allowance specified in the Project agreement.</li>
          <li><strong>Scope Changes:</strong> Requests that introduce new features, alter previously approved designs, change fundamental architecture, or require substantial code refactoring.</li>
        </ul>
        <p>
          Scope changes will be estimated separately and submitted to the Client for approval before additional work is performed.
        </p>
      </>
    ),
  },
  {
    id: "07",
    title: "7. APPROVALS AND CLIENT SIGN-OFF",
    content: (
      <>
        <p className="mb-4">
          The Client agrees to review deliverables at designated milestones and provide written sign-off or consolidated feedback in a timely manner.
        </p>
        <p>
          Once a milestone or design phase is approved by the Client, subsequent requests to alter that approved work will be treated as a scope change and billed accordingly.
        </p>
      </>
    ),
  },
  {
    id: "08",
    title: "8. INTELLECTUAL PROPERTY",
    content: (
      <>
        <p className="mb-4">
          Intellectual property ownership across Project materials is categorized as follows:
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-1">A. Client Materials</h4>
            <p>All logos, copy, images, trademarks, and proprietary data provided by the Client remain the exclusive property of the Client.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">B. Custom Project Deliverables</h4>
            <p>Subject to full payment of all agreed Project fees, rights to custom graphics, bespoke code, and tailored layouts created specifically for the Client under the Project agreement shall transfer or be licensed to the Client as agreed.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">C. Avento Pre-Existing Materials</h4>
            <p>Avento retains all right, title, and interest in its pre-existing code repositories, boilerplate frameworks, reusable components, animation utilities, design systems, internal scripts, and know-how. The Client is granted a non-exclusive, perpetual, non-transferable license to use embedded pre-existing materials solely within the final delivered website or application.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">D. Third-Party Materials</h4>
            <p>Third-party fonts, stock photography, icons, plugins, APIs, and commercial software remain subject to their respective third-party licenses and terms.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">E. Open-Source Software</h4>
            <p>Open-source libraries, packages, and frameworks incorporated into the Project remain subject to their respective open-source licenses (e.g., MIT, Apache 2.0, BSD).</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "09",
    title: "9. DOMAIN NAMES, HOSTING AND THIRD-PARTY SERVICES",
    content: (
      <>
        <p className="mb-4">
          Third-party services—including domain registrars, hosting platforms (e.g., Vercel, Netlify, AWS), DNS providers, payment gateways (e.g., Stripe, Razorpay), CMS platforms, email services, and APIs—operate under their own independent terms, fees, and service level agreements.
        </p>
        <p className="mb-4">
          Unless explicitly agreed in writing under a dedicated maintenance agreement, Avento is not responsible for outages, service interruptions, policy updates, fee changes, API deprecations, or data loss caused by third-party providers.
        </p>
        <p>
          Client accounts registered with third-party providers remain the property and responsibility of the Client.
        </p>
      </>
    ),
  },
  {
    id: "10",
    title: "10. WEBSITE CONTENT AND LEGAL COMPLIANCE",
    content: (
      <>
        <p className="mb-4">
          The Client is solely responsible for the legal compliance, accuracy, and truthfulness of all business content, claims, product specifications, pricing, terms, policies, advertising claims, customer testimonials, and regulatory disclosures displayed on the website.
        </p>
        <p>
          Avento provides digital design and software engineering services. Avento does not provide legal, tax, accounting, medical, or regulatory advice. If legal compliance (such as cookie consent, accessibility standards, or industry disclosures) is required, the Client should consult a qualified professional.
        </p>
      </>
    ),
  },
  {
    id: "11",
    title: "11. SEO, GEO AND PERFORMANCE",
    content: (
      <>
        <p className="mb-4">
          Where SEO, Generative Engine Optimization (GEO), or performance optimization services are agreed upon, Avento applies industry-standard technical optimization practices, structured markup, semantic HTML, and performance tuning.
        </p>
        <p>
          However, Avento does not guarantee specific search engine rankings (such as top Google results), AI discovery rankings, search traffic volume, lead generation numbers, conversion rates, or revenue. Search engine and AI discovery rankings are governed by third-party algorithms completely outside Avento&apos;s control.
        </p>
      </>
    ),
  },
  {
    id: "12",
    title: "12. WARRANTIES AND DISCLAIMERS",
    content: (
      <>
        <p className="mb-4">
          Avento warrants that it will perform agreed Services with reasonable skill, care, and professionalism in accordance with current web standards.
        </p>
        <p className="mb-4">
          Except as expressly set forth in a written agreement, all Services and Deliverables are provided &ldquo;as is&rdquo; without warranty of any kind, express or implied. Web software operates in dynamic environments dependent on third-party web browsers, operating systems, hardware, network conditions, and API availability. Avento does not warrant that website functions will remain error-free, uninterrupted, or compatible with future unannounced browser or OS releases forever.
        </p>
        <p>
          Nothing in these Terms excludes or limits any statutory warranty or right that cannot legally be excluded under applicable governing law.
        </p>
      </>
    ),
  },
  {
    id: "13",
    title: "13. BUG FIXES AND SUPPORT",
    content: (
      <>
        <p className="mb-4">
          Avento distinguishes between project bug fixes and new feature development:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Project Bug Fixes:</strong> Resolving technical non-conformances with the agreed Project specification, addressed according to the warranty period defined in the Project agreement.</li>
          <li><strong>New Features &amp; Updates:</strong> Functional changes, layout updates, platform upgrades, or third-party breaking API adjustments occurring post-launch are not classified as bug fixes and require a separate engagement or support retainer.</li>
        </ul>
        <p>
          Ongoing site monitoring, security maintenance, content updates, and server infrastructure support are provided only under an active, written retainer contract.
        </p>
      </>
    ),
  },
  {
    id: "14",
    title: "14. LIMITATION OF LIABILITY",
    content: (
      <>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, in no event shall Avento, its founders, directors, employees, or partners be liable to the Client or any third party for any indirect, incidental, consequential, special, or punitive damages—including loss of profits, loss of revenue, loss of business opportunities, loss of goodwill, or loss of data—arising out of or in connection with our Services or Deliverables.
        </p>
        <p className="mb-4">
          For any direct damages, Avento&apos;s total aggregate liability arising under or relating to a Project shall be strictly limited to the total fees actually paid by the Client to Avento for the specific Project giving rise to the claim in the twelve (12) months preceding the incident, or as specified in the applicable Project agreement.
        </p>
        <p>
          Where a separately signed Project agreement specifies a different liability limitation, that agreement shall control.
        </p>
      </>
    ),
  },
  {
    id: "15",
    title: "15. CLIENT INDEMNIFICATION",
    content: (
      <>
        <p>
          The Client agrees to defend, indemnify, and hold harmless Avento, its founders, team members, and contractors against any third-party claims, losses, damages, liabilities, and expenses (including reasonable legal fees) arising directly from: (a) Client-supplied content or materials infringing third-party intellectual property or privacy rights; (b) unlawful instructions provided by the Client; (c) misuse of the website or Deliverables by the Client; or (d) material breach of these Terms by the Client.
        </p>
      </>
    ),
  },
  {
    id: "16",
    title: "16. CONFIDENTIALITY",
    content: (
      <>
        <p className="mb-4">
          Both Avento and the Client agree to treat as confidential all non-public business, financial, technical, or trade secret information disclosed during the engagement (&ldquo;Confidential Information&rdquo;).
        </p>
        <p className="mb-4">
          Confidential Information shall not include information that: (a) is or becomes publicly known through no breach of the receiving party; (b) was already lawfully known prior to disclosure; (c) is independently developed without reference to Confidential Information; or (d) is required to be disclosed by law or court order.
        </p>
        <p>
          Project-specific Non-Disclosure Agreements (NDAs) signed by both parties shall supersede this section where applicable.
        </p>
      </>
    ),
  },
  {
    id: "17",
    title: "17. DATA PROTECTION AND PRIVACY",
    content: (
      <>
        <p className="mb-4">
          Personal data collected through this website or during service engagements is processed in accordance with Avento&apos;s{" "}
          <Link href="/privacy" className="text-brand hover:underline font-semibold">
            Privacy Policy
          </Link>.
        </p>
        <p>
          Where applicable under India&apos;s Digital Personal Data Protection Act (DPDP Act 2023) and notified 2025 implementation rules, Avento respects data principal rights and processes personal data based on clear notice, consent, or legitimate business requirements.
        </p>
      </>
    ),
  },
  {
    id: "18",
    title: "18. SECURITY",
    content: (
      <>
        <p className="mb-4">
          Avento implements industry-standard technical precautions during development. However, no digital system or internet transmission can be guaranteed completely immune to security breaches or cyber threats.
        </p>
        <p className="mb-4">
          The Client is responsible for safeguarding administrative login credentials, API secrets, and server access keys.
        </p>
        <p>
          Avento is not liable for security incidents resulting from compromised client credentials, unauthorized third-party access to client infrastructure, unpatched third-party plugins, or modifications made to the codebase by parties other than Avento.
        </p>
      </>
    ),
  },
  {
    id: "19",
    title: "19. PORTFOLIO AND MARKETING RIGHTS",
    content: (
      <>
        <p>
          Unless explicitly agreed otherwise in writing (such as under a signed NDA or Project agreement), Avento reserves the right to display completed, publicly launched Projects, visuals, case studies, and code demonstrations in its portfolio, website, social channels, and marketing presentations.
        </p>
      </>
    ),
  },
  {
    id: "20",
    title: "20. THIRD-PARTY SERVICES",
    content: (
      <>
        <p>
          Avento may integrate third-party services, APIs, payment gateways, analytics tools, or headless CMS platforms (e.g., Google, Meta, Stripe, Razorpay, Supabase, Vercel). Avento does not control third-party service availability, pricing revisions, API updates, or policy changes. The Client remains subject to and bound by third-party terms of service and subscription costs.
        </p>
      </>
    ),
  },
  {
    id: "21",
    title: "21. SUSPENSION AND TERMINATION",
    content: (
      <>
        <p className="mb-4">
          Either party may terminate an ongoing service engagement or Project for cause upon written notice if the other party materially breaches these Terms or the Project agreement and fails to cure such breach within fourteen (14) days of notice.
        </p>
        <p className="mb-4">
          Avento reserves the right to suspend or terminate Services immediately in cases of non-payment, unlawful instructions, abusive conduct, or client insolvency.
        </p>
        <p>
          Upon termination, all billable work completed up to the date of termination shall become immediately due and payable. Deliverable transfers, asset handovers, and licensing shall remain contingent upon full settlement of outstanding invoices.
        </p>
      </>
    ),
  },
  {
    id: "22",
    title: "22. FORCE MAJEURE",
    content: (
      <>
        <p>
          Neither party shall be liable for failure or delay in performance (other than monetary payment obligations) caused by events beyond reasonable control, including natural disasters, acts of God, war, civil disturbance, government orders, widespread internet or telecommunications outages, major cyberattacks, or failures of critical global cloud infrastructure.
        </p>
      </>
    ),
  },
  {
    id: "23",
    title: "23. ELECTRONIC COMMUNICATION AND ACCEPTANCE",
    content: (
      <>
        <p>
          The parties agree that proposals, estimates, Statements of Work, change requests, approvals, and contract updates may be executed and delivered electronically (via email or digital signature platforms), and such electronic communications shall be deemed valid and binding in accordance with Section 10A of India&apos;s Information Technology Act 2000.
        </p>
      </>
    ),
  },
  {
    id: "24",
    title: "24. DISPUTE RESOLUTION",
    content: (
      <>
        <p className="mb-4">
          In the event of any disagreement or dispute arising out of or relating to these Terms or a Project, the parties agree to first attempt informal resolution through good-faith negotiation between designated representatives.
        </p>
        <p>
          If the dispute cannot be resolved informally within thirty (30) days, either party may pursue formal proceedings before the courts specified in Section 25 ([GOVERNING COURTS]).
        </p>
      </>
    ),
  },
  {
    id: "25",
    title: "25. GOVERNING LAW",
    content: (
      <>
        <p>
          These Terms and all engagements with Avento shall be governed by and construed in accordance with the laws of India. Subject to Section 24, to the extent legally permissible, the courts located in [GOVERNING CITY/STATE] shall have exclusive jurisdiction over all legal matters arising under these Terms.
        </p>
      </>
    ),
  },
  {
    id: "26",
    title: "26. SEVERABILITY",
    content: (
      <>
        <p>
          If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be enforced to the maximum extent permissible, and the remaining provisions of these Terms shall remain in full force and effect.
        </p>
      </>
    ),
  },
  {
    id: "27",
    title: "27. WAIVER",
    content: (
      <>
        <p>
          No failure or delay by Avento in exercising any right, power, or remedy under these Terms shall operate as a waiver thereof, nor shall any single or partial exercise preclude any other or further exercise of any right, power, or remedy.
        </p>
      </>
    ),
  },
  {
    id: "28",
    title: "28. ENTIRE AGREEMENT",
    content: (
      <>
        <p>
          These Terms, together with mutually executed Project proposals, Statements of Work, invoices, and signed Non-Disclosure Agreements, constitute the entire agreement between Avento and the Client regarding the subject matter herein, superseding all prior discussions, representations, or oral agreements.
        </p>
      </>
    ),
  },
  {
    id: "29",
    title: "29. CHANGES TO THESE TERMS",
    content: (
      <>
        <p>
          Avento reserves the right to update or modify these website Terms from time to time to reflect changes in legal, regulatory, operational, or technical requirements. Updated versions will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued engagement with Avento following posted changes constitutes acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    id: "30",
    title: "30. CONTACT",
    content: (
      <>
        <p className="mb-4">
          For any questions, legal inquiries, or formal notices regarding these Terms, please contact us:
        </p>
        <div className="p-6 rounded-xl border border-border bg-surface-muted/50 space-y-2 text-body text-foreground font-mono text-sm">
          <p><strong>Avento Studio</strong></p>
          <p>Legal Entity: [LEGAL ENTITY NAME]</p>
          <p>Email: <a href="mailto:[OFFICIAL EMAIL]" className="text-brand hover:underline">[OFFICIAL EMAIL]</a></p>
          <p>Address: [BUSINESS ADDRESS]</p>
        </div>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <Section className="bg-transparent pt-20 md:pt-32 pb-24">
      <Container className="max-w-4xl">
        <span className="text-xs font-mono font-semibold tracking-widest text-brand uppercase mb-3 block">
          LEGAL &amp; POLICY
        </span>
        <h1 className="text-h1 mb-4">TERMS OF SERVICE</h1>
        <p className="text-body-lg text-foreground font-medium mb-3">
          Clear terms for building, launching and supporting digital experiences with Avento.
        </p>
        <p className="text-body-sm text-muted font-mono mb-12 border-b border-border pb-6">
          Last updated: August 21, 2026
        </p>

        <div className="space-y-12">
          {sections.map((section) => (
            <div 
              key={section.id} 
              id={`section-${section.id}`}
              className="p-8 rounded-2xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 hover:border-brand/30"
            >
              <h2 className="text-h3 text-foreground mb-4 font-heading border-b border-border/50 pb-3 flex items-center justify-between">
                <span>{section.title}</span>
                <span className="text-xs font-mono text-brand font-normal">/ {section.id}</span>
              </h2>
              <div className="text-body text-muted leading-relaxed font-normal">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-muted">
            Have questions about a specific project agreement?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-6 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-brand text-white hover:bg-brand-hover shadow-md"
          >
            Contact Studio &rarr;
          </Link>
        </div>
      </Container>
    </Section>
  );
}
