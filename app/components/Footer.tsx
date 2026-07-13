import SocialIcons from "@/app/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <SocialIcons />
        <p className="text-sm text-ink/50">
          © {new Date().getFullYear()} Beeba Expert. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
