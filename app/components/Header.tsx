"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileAvatar from "@/app/components/ProfileAvatar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <ProfileAvatar
            size="sm"
            className="border border-border bg-surface"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-ink">Beeba Expert</p>
            <p className="text-xs text-ink/60">Shopify Expert</p>
          </div>
        </Link>
      </div>

      <nav className="flex gap-2 overflow-x-auto border-b border-border px-4 py-2 scrollbar-none md:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium ${
              isActive(link.href)
                ? "bg-accent text-white"
                : "bg-surface text-ink/70"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav className="hidden items-center justify-center gap-8 border-b border-border px-6 py-3 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors ${
              isActive(link.href)
                ? "text-accent underline underline-offset-4"
                : "text-ink hover:text-accent"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
