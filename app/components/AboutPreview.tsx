import Link from "next/link";
import EducationCertifications from "@/app/components/EducationCertifications";
import SkillsList from "@/app/components/SkillsList";
import { clientReviews, skills } from "@/app/lib/data";

export default function AboutPreview() {
  const featuredReviews = clientReviews.slice(0, 4);

  return (
    <section className="border-t border-border bg-surface px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          About Me
        </p>

        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
          Hi, I&apos;m Beeba Expert
        </h2>

        <p className="mt-4 text-base leading-relaxed text-ink/70">
          I&apos;m a Shopify specialist with hands-on experience helping store
          owners design, build, and optimize stores that convert visitors into
          paying customers. Whether you&apos;re starting from scratch or need to
          fix a store that isn&apos;t performing, I bring the technical skill
          and strategic eye to get it right. Every project I take on is treated
          like it&apos;s my own store — because your growth is genuinely my
          priority.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <h3 className="mb-4 text-xl font-bold text-accent">
          Skills &amp; Expertise
        </h3>
        <SkillsList skills={skills} centered />
      </div>

      <div className="mx-auto mt-14 max-w-3xl text-center">
        <h3 className="mb-1 text-xl font-bold text-ink">What Our Clients Say</h3>
        <p className="mb-6 text-sm text-ink/60">
          Hear directly from people I&apos;ve worked with.
        </p>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
          {featuredReviews.map((item) => (
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

        <Link
          href="/reviews"
          className="mt-4 inline-block font-medium text-ink transition-colors hover:text-accent"
        >
          See all video reviews →
        </Link>
      </div>

      <div className="mx-auto mt-14 max-w-2xl">
        <EducationCertifications />
      </div>
    </section>
  );
}
