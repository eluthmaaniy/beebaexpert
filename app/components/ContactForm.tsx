"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: wire this up to an email service (e.g. Web3Forms, Formspree, or Resend) before going live
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center">
        <i
          className="ri-checkbox-circle-line text-3xl text-accent"
          aria-hidden="true"
        />
        <p className="mt-2 font-semibold text-ink">Message Received</p>
        <p className="mt-1 text-sm text-ink/60">
          Thanks for reaching out — I&apos;ll get back to you within 1 hour.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell me about your project..."
        className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40"
      />
      <button
        type="submit"
        className="mt-2 rounded-full bg-ash px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
      >
        Send Message
      </button>
    </form>
  );
}
