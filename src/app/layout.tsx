import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AtmosphericBackground } from "@/components/layout/atmospheric-background";
import { TechnicalLinework } from "@/components/layout/technical-linework";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const fontDisplay = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontBody = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AVENTO | Creative Web Studio & Systems Architecture",
    template: "%s | AVENTO",
  },
  description: "Boutique digital studio crafting high-impact digital experiences, bespoke web development, and custom workflow automation.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡</text></svg>',
  },
  openGraph: {
    title: "AVENTO | Creative Web Studio",
    description: "High-impact web design, creative development, and automation architecture.",
    url: "https://avento.studio",
    siteName: "AVENTO Creative Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVENTO | Creative Web Studio",
    description: "High-impact web design, creative development, and automation architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} antialiased dark`}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-violet-500/30 selection:text-white relative transition-colors duration-500">
        <ThemeProvider>
          <AtmosphericBackground />
          <TechnicalLinework />
          <GrainOverlay />
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


