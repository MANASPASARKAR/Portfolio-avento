import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Terms of Service | Agency Portfolio",
  description: "Terms of Service and legal agreements.",
};

export default function Terms() {
  return (
    <Section className="bg-surface pt-24 md:pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="text-h1 mb-8">Terms of Service</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-body-lg mb-6">Last updated: [Placeholder Date]</p>
          
          <h2 className="text-h4 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-body mb-6">
            [Placeholder text] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2 className="text-h4 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="text-body mb-6">
            [Placeholder text] Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>

          <h2 className="text-h4 mt-8 mb-4">3. User Representations</h2>
          <p className="text-body mb-6">
            [Placeholder text] Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
          
          <h2 className="text-h4 mt-8 mb-4">4. Limitations of Liability</h2>
          <p className="text-body mb-6">
            [Placeholder text] Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
        </div>
      </Container>
    </Section>
  );
}
