import Image from "next/image";
import { profileImageUrl } from "@/app/lib/data";

type ProfileAvatarProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "h-12 w-12",
  md: "h-16 w-16",
  lg: "h-28 w-28 md:h-32 md:w-32",
};

export default function ProfileAvatar({
  size = "sm",
  className = "",
}: ProfileAvatarProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={profileImageUrl}
        alt="Beeba Expert profile photo"
        fill
        className="object-cover"
        sizes={
          size === "lg"
            ? "(max-width: 768px) 112px, 128px"
            : size === "md"
              ? "64px"
              : "48px"
        }
        priority={size === "lg"}
      />
    </div>
  );
}
