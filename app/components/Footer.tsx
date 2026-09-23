import SocialIcons from "@/app/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <SocialIcons />
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Beeba Expert. All rights reserved.
        </p>
        <p className="text-xs text-ink/40">
          Built by{" "}
          <a
            href="https://eltemur.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink/60 underline decoration-ink/20 underline-offset-2 hover:text-ink"
          >
            Eltemur Zentra Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
