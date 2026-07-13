import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import SocialIcons, { socialLinks } from "@/app/components/SocialIcons";
import { whatsappLink } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Beeba Expert for your next Shopify project. Fast response via WhatsApp, email, or Telegram.",
};

const followLinks = socialLinks.filter(
  (link) => link.label === "Contact on Telegram",
);

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14 md:py-20">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          Contact
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
          Let&apos;s Work Together
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-ink/60">
          Have a Shopify project in mind? Reach out and let&apos;s talk about how
          I can help your store grow.
        </p>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-ink/60">
          <span className="inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-green-500"
              aria-hidden="true"
            />
            Online now
          </span>
          <span aria-hidden="true">·</span>
          <span>Usually replies within 1 hour</span>
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <i className="ri-whatsapp-line text-2xl" aria-hidden="true" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-ink">Chat on WhatsApp</h2>
        <p className="mt-1 text-sm text-ink/60">
          The fastest way to reach me directly.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
        >
          <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
          Message on WhatsApp
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-5">
          <i
            className="ri-mail-line shrink-0 text-xl text-ink/40"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-ink">Email</p>
            <div className="mt-0.5 space-y-1 text-sm text-ink/60">
              <a
                href="mailto:badajelili43@gmail.com"
                className="block transition-colors hover:text-accent"
              >
                badajelili43@gmail.com
              </a>
              <a
                href="mailto:beebasales01@gmail.com"
                className="block transition-colors hover:text-accent"
              >
                beebasales01@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-5">
          <i
            className="ri-share-line shrink-0 text-xl text-ink/40"
            aria-hidden="true"
          />
          <div>
            <p className="text-sm font-semibold text-ink">Follow Me</p>
            <SocialIcons links={followLinks} className="mt-2 flex gap-2" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-1 text-sm font-medium text-ink/50">
          Prefer not to use WhatsApp?
        </p>
        <h2 className="mb-4 text-lg font-bold text-ink">Send a Message Instead</h2>
        <ContactForm />
      </div>
    </div>
  );
}
