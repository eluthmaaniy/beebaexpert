import Link from "next/link";

const projects = [
  { number: 1, label: "Store Redesign" },
  { number: 2, label: "Product Listings" },
  { number: 3, label: "Conversion Optimization" },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-accent">
          My Work
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-ink md:text-3xl">
          Recent Shopify Projects
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink/60">
          A few stores I&apos;ve designed, built, and optimized for clients.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative flex aspect-[4/5] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent"
            >
              <i
                className="ri-store-2-line text-4xl text-ink/30"
                aria-hidden="true"
              />
              <p className="text-sm text-ink/40">Project {project.number}</p>
              <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/95 px-3 py-2 text-center text-sm font-medium text-ink">
                {project.label}
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
