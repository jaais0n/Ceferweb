import { useState } from "react";

interface AnnouncementBarProps {
  className?: string;
}

export function AnnouncementBar({ className }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={
        "relative flex items-center justify-center px-4 py-3 text-sm text-white bg-orange-500 " +
        (className ?? "")
      }
    >
      <p className="text-center font-medium">
        Download our new browser extension — click here
        <a
          href="/chrome-extension"
          className="ml-2 underline underline-offset-2 font-semibold hover:text-white/90"
        >
          Get the extension
        </a>
      </p>
      <button
        type="button"
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
        onClick={() => setVisible(false)}
      >
        ×
      </button>
    </div>
  );
}

