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
      // Reset form after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section className="bg-surface pt-24 md:pt-32 pb-24">
      <Container className="max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-h1 mb-6">Get in Touch</h1>
          <p className="text-body-lg">
            Have a project in mind or want to learn more about our automation services? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className="text-h3 mb-6">Contact Information</h2>
            
            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-2">Email</h3>
                <a href="mailto:hello@example.com" className="text-body-lg hover:text-primary transition-colors">
                  hello@example.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-2">Office Location</h3>
                <p className="text-body-lg">
                  123 Innovation Drive<br />
                  Tech District, Suite 400<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-2">Working Hours</h3>
                <p className="text-body-lg">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
            
            <div className="mt-auto p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-border">
              <h3 className="text-h4 mb-2">Not quite ready?</h3>
              <p className="text-body-sm mb-4">
                Follow our insights on automation and design.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm font-medium text-primary hover:underline">Twitter</a>
                <a href="#" className="text-sm font-medium text-primary hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-50 dark:bg-neutral-900 p-8 rounded-2xl border border-border">
              <h2 className="text-h4 mb-6">Send a Message</h2>
              
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full p-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full inline-flex items-center justify-center h-11 px-8 text-base font-medium transition-colors rounded-md bg-primary text-white hover:bg-primary-hover shadow-sm disabled:opacity-70 disabled:pointer-events-none"
              >
                {status === "idle" && "Send Message"}
                {status === "submitting" && "Sending..."}
                {status === "success" && "Message Sent!"}
              </button>
              
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400 text-center mt-4">
                  Thank you! We'll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center mt-4">
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
