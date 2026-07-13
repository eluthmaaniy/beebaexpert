"use client";

import { useState } from "react";
import {
  clientReviews,
  storeShowcases,
  whatsappLink,
} from "@/app/lib/data";

type Tab = "clients" | "showcases";

function EmptyState() {
  return (
    <div className="py-16 text-center">
      <i className="ri-video-line text-4xl text-ink/20" aria-hidden="true" />
      <p className="mt-3 text-sm text-ink/40">More videos coming soon</p>
    </div>
  );
}

export default function ReviewsContent() {
  const [activeTab, setActiveTab] = useState<Tab>("clients");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const visibleReviews = showAllReviews
    ? clientReviews
    : clientReviews.slice(0, 4);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 pt-14 text-center md:pt-20">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          Reviews
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
          What Clients &amp; Their Stores Say
        </h1>
        <p className="mt-3 text-base text-ink/60">
          Real feedback from clients, and a look at the stores I&apos;ve built.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-2xl justify-center px-6">
        <div className="inline-flex gap-1 rounded-full border border-border bg-surface p-1">
          <button
            type="button"
            onClick={() => setActiveTab("clients")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeTab === "clients"
                ? "bg-accent text-white"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            <i className="ri-chat-smile-2-line text-base" aria-hidden="true" />
            Client Reviews
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("showcases")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeTab === "showcases"
                ? "bg-accent text-white"
                : "text-ink/60 hover:text-ink"
            }`}
          >
            <i className="ri-play-circle-line text-base" aria-hidden="true" />
            Store Showcases
          </button>
        </div>
      </div>

      {activeTab === "clients" ? (
        <div className="mx-auto max-w-4xl px-6 py-12">
          {clientReviews.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {visibleReviews.map((item) => (
                  <div key={item.id}>
                    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.clientName}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="mt-2 text-center text-sm font-medium text-ink">
                      {item.clientName}
                    </p>
                  </div>
                ))}
              </div>
              {clientReviews.length > 4 && !showAllReviews && (
                <div className="mt-8 text-center">
                  <button
                    type="button"
                    onClick={() => setShowAllReviews(true)}
                    className="rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent"
                  >
                    Show more reviews
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="mx-auto max-w-4xl px-6 py-12">
          {storeShowcases.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {storeShowcases.map((item) => (
                <div key={item.id}>
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}`}
                      title={item.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="mt-2 text-center text-sm font-medium text-ink">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mx-auto mt-4 max-w-2xl border-t border-border px-6 pb-16 pt-10 text-center">
        <p className="text-base text-ink/70">
          Want results like these for your store?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-4 flex w-fit items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
        >
          <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
