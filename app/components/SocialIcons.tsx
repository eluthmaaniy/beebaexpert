import { telegramLink, whatsappLink } from "@/app/lib/data";

export const socialLinks = [
  {
    href: whatsappLink,
    icon: "ri-whatsapp-line",
    label: "Contact on WhatsApp",
    external: true,
  },
  {
    href: telegramLink,
    icon: "ri-telegram-line",
    label: "Contact on Telegram",
    external: true,
  },
];

type SocialIconsProps = {
  links?: typeof socialLinks;
  className?: string;
};

export default function SocialIcons({
  links = socialLinks,
  className = "flex items-center gap-3",
}: SocialIconsProps) {
  return (
    <div className={className}>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          {...(social.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-ink transition-colors hover:bg-accent hover:text-white"
        >
          <i className={`${social.icon} text-lg`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
