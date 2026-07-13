import Image from "next/image";
import Link from "next/link";
import LocalTimeDisplay from "@/app/components/LocalTimeDisplay";
import ProfileAvatar from "@/app/components/ProfileAvatar";
import { coverImageUrl } from "@/app/lib/data";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="relative h-40 w-full md:h-56">
        <Image
          src={coverImageUrl}
          alt="Beeba Expert - Shopify Expert cover banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="relative mx-auto -mt-14 md:-mt-16">
          <ProfileAvatar
            size="lg"
            className="mx-auto border-4 border-background bg-surface shadow-sm"
          />
        </div>

        <div className="mt-4 px-6 text-center">
          <h1 className="text-2xl font-bold text-ink md:text-3xl">Beeba Expert</h1>

          <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-ink/60">
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

          <LocalTimeDisplay />

          <p className="mx-auto mt-2 max-w-md text-base text-ink/70">
            Shopify Expert helping store owners design, build, and grow stores
            that actually convert.
          </p>

          <p className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm text-ink/50">
            <i className="ri-map-pin-line text-ink/40" aria-hidden="true" />
            Nigeria · Shopify Partner Expert
          </p>
        </div>

        <div className="mx-auto mt-6 flex justify-center px-6">
          <Link
            href="/reviews"
            className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
          >
            <i className="ri-briefcase-4-line text-lg" aria-hidden="true" />
            See My Work
          </Link>
        </div>

        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 pb-10 text-center text-sm text-ink/60">
          <span>3+ Years Experience</span>
          <span aria-hidden="true">·</span>
          <span>450+ Projects</span>
          <span aria-hidden="true">·</span>
          <span>5.0 Rating</span>
        </p>
      </div>
    </section>
  );
}
