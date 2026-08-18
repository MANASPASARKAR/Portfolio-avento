"use client";

import { useState } from "react";

export function AutomationNotifyTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setEmail("");
    }, 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-all duration-300 cursor-pointer group"
      >
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse group-hover:scale-125 transition-transform" />
        Get Notified At Launch &rarr;
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md p-8 rounded-3xl border border-border bg-surface backdrop-blur-xl shadow-2xl space-y-6">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-muted hover:text-foreground text-sm font-mono"
            >
              ✕
            </button>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-[10px] font-mono font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                BUILDING NOW // AVAILABLE SOON
              </div>
              <h3 className="text-h3 font-bold text-foreground">Workflow Automation</h3>
              <p className="text-body-sm text-muted">
                Be the first to know when our custom business automation solutions launch. Spend less time on manual tasks and more time growing.
              </p>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono text-center">
                ✓ You've been added to the notification list.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-border bg-surface-muted text-foreground placeholder:text-muted text-sm focus:outline-none focus:border-brand"
                />
                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-wider hover:bg-brand hover:text-white transition-colors cursor-pointer"
                >
                  Notify Me At Launch →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
