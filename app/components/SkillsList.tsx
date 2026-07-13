"use client";

import { useState } from "react";

type SkillsListProps = {
  skills: string[];
  centered?: boolean;
};

export default function SkillsList({ skills, centered = false }: SkillsListProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = skills.length > 10;
  const visibleSkills = expanded || !hasMore ? skills : skills.slice(0, 10);
  const remainingCount = skills.length - 10;

  const handleToggle = () => {
    setExpanded((open) => !open);
  };

  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}
      >
        {visibleSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            {skill}
          </span>
        ))}
      </div>

      {hasMore && (
        <div className={`relative z-10 mt-3 ${centered ? "flex justify-center" : ""}`}>
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={expanded}
            className="cursor-pointer touch-manipulation rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
          >
            {expanded ? "Show less" : `+${remainingCount} more`}
          </button>
        </div>
      )}
    </div>
  );
}
