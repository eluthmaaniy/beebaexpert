"use client";

import { whatsappLink } from "@/app/lib/data";

export default function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-opacity hover:opacity-90"
    >
      <i className="ri-whatsapp-line text-2xl" aria-hidden="true" />
    </a>
  );
}
