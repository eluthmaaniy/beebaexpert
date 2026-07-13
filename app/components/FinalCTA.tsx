import Link from "next/link";
import { whatsappLink } from "@/app/lib/data";

export default function FinalCTA() {
  return (
    <section className="bg-ash px-6 py-16 text-center md:py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Ready to Grow Your Shopify Store?
        </h2>
        <p className="mt-3 text-base text-white/70">
          Let&apos;s talk about your store and how I can help you get more sales.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
          >
            <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
            Contact on WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
          >
            <i className="ri-mail-line text-lg" aria-hidden="true" />
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
