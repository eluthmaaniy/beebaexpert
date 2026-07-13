"use client";

import { useEffect, useState } from "react";

export default function LocalTimeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour: "numeric",
        minute: "2-digit",
      });
      setTime(`${formatted} local time`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 30000);

    return () => clearInterval(intervalId);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-ink/60">
      <i className="ri-global-line text-ink/40" aria-hidden="true" />
      English
      <span aria-hidden="true">·</span>
      <span>{time}</span>
    </p>
  );
}
