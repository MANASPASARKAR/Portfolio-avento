"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section className="bg-transparent pt-20 md:pt-32 pb-24">
      <Container className="max-w-6xl">
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest text-brand uppercase mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-hero mb-6">
            LET’S BUILD <br />
            SOMETHING GREAT.
          </h1>
          <p className="text-body-lg">
            Have a custom web project, rebranding initiative, or operational automation challenge? Send us a message below and we will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Info — 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10 p-8 md:p-12 rounded-3xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-300">
            <div>
              <h2 className="text-h3 mb-8">STUDIO CONTACT</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-semibold text-brand tracking-widest uppercase mb-2">Direct Email</h3>
                  <a href="mailto:hello@avento.studio" className="text-body-lg text-foreground hover:text-brand transition-colors">
                    hello@avento.studio
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-brand tracking-widest uppercase mb-2">Studio Location</h3>
                  <p className="text-body text-foreground leading-relaxed">
                    123 Innovation Drive, Suite 400<br />
                    Tech & Design District<br />
                    New York, NY 10001
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-brand tracking-widest uppercase mb-2">Operating Hours</h3>
                  <p className="text-body text-foreground">
                    Monday — Friday<br />
                    9:00 AM — 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border">
              <h3 className="text-xs font-semibold text-muted tracking-widest uppercase mb-3">Connect Elsewhere</h3>
              <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-foreground hover:text-brand uppercase tracking-wider transition-colors">Twitter / X</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-foreground hover:text-brand uppercase tracking-wider transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-foreground hover:text-brand uppercase tracking-wider transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          {/* Form — 7 cols */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12 rounded-3xl border border-border bg-surface backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-300">
              <h2 className="text-h3 mb-6">PROJECT INQUIRY</h2>
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Jane Doe / Acme Corp"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full h-12 px-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                  Project Details / Timeline *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your goals, desired timeline, or tech requirements..."
                  className="w-full p-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full inline-flex items-center justify-center h-14 px-8 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full bg-brand text-white hover:bg-brand-hover shadow-lg disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {status === "idle" && "Submit Project Inquiry →"}
                {status === "submitting" && "Transmitting..."}
                {status === "success" && "Message Received ✓"}
              </button>
              
              {status === "success" && (
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 text-center mt-4">
                  Thank you for reaching out. We will respond within 24 business hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 text-center mt-4">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );

}


