import type { Metadata } from "next";
import EducationCertifications from "@/app/components/EducationCertifications";
import ProfileAvatar from "@/app/components/ProfileAvatar";
import SkillsList from "@/app/components/SkillsList";
import { howIWorkSteps, skills, whatsappLink } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Beeba Expert, a Shopify specialist with 3+ years of experience helping store owners build profitable ecommerce brands.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14 md:py-20">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">
        About Me
      </p>
      <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
        The Story Behind Beeba Expert
      </h1>

      <ProfileAvatar
        size="md"
        className="mt-4 border border-border bg-surface"
      />

      <div className="mt-8 space-y-4 text-base leading-relaxed text-ink/70">
        <p>
          I&apos;m Beeba Expert, a Shopify specialist with years of hands-on
          experience helping store owners turn their ideas into fully
          functioning, profitable ecommerce brands. My work spans everything from
          complete store builds to product listings, store audits, and conversion
          optimization.
        </p>
        <p>
          I got into ecommerce because I saw how many great products and business
          ideas were being held back by poorly built, hard-to-navigate stores.
          Since then, I&apos;ve made it my focus to fix that — building stores
          that don&apos;t just look good, but actually convert visitors into
          paying customers.
        </p>
        <p>
          When you work with me, you&apos;re not just getting a freelancer —
          you&apos;re getting someone who treats your store like it&apos;s their
          own. I take the time to understand your brand, your customers, and your
          goals before I touch a single page, because a store that doesn&apos;t
          reflect your business won&apos;t grow it.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-ink">How I Work</h2>
        <div>
          {howIWorkSteps.map((step, index) => (
            <div
              key={step.title}
              className={`flex items-start gap-4 ${index < howIWorkSteps.length - 1 ? "mb-5" : ""}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm text-ink/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-accent">
          Skills &amp; Expertise
        </h2>
        <SkillsList skills={skills} />
      </div>

      <div className="mt-10">
        <EducationCertifications />
      </div>

      <div className="mt-14 border-t border-border pt-10 text-center">
        <p className="text-base text-ink/70">Have a project in mind?</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
        >
          <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
}
