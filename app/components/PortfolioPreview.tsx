import Link from "next/link";
import { storeShowcases } from "@/app/lib/data";

export default function PortfolioPreview() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-accent">
          My Work
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-ink md:text-3xl">
          Recent Shopify Projects
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink/60">
          A few stores I&apos;ve designed, built, and optimized for clients.
        </p>

        <div className="mt-10 space-y-6">
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
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                {item.storeUrl && (
                  <a
                    href={item.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Visit Store
                    <i
                      className="ri-external-link-line text-base"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            See Client Reviews &amp; Store Showcases
            <i className="ri-arrow-right-line text-base" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
