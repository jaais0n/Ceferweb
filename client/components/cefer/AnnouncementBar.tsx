import { useState } from "react";
import { Link } from "react-router-dom";

interface AnnouncementBarProps {
  className?: string;
}

export function AnnouncementBar({ className }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={"relative z-[60] border-b border-orange-300 bg-orange-500 text-white " + (className ?? "")}>
      <div className="mx-auto flex w-full max-w-7xl items-start justify-center px-4 py-2.5 sm:items-center sm:px-6">
        <div className="flex w-full max-w-3xl flex-col items-center gap-2 pr-9 sm:flex-row sm:justify-center sm:gap-3 sm:pr-0">
          <p className="text-center text-xs font-semibold leading-snug sm:text-sm">
            Download our new browser extension for faster prospecting.
          </p>
          <Link
            to="/chrome-extension"
            className="inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-50 sm:text-sm"
          >
            Get the extension
          </Link>
        </div>
      </div>

      <button
        type="button"
        aria-label="Dismiss announcement"
        className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none text-white/95 transition hover:bg-white/15 hover:text-white"
        onClick={() => setVisible(false)}
      >
        x
      </button>
    </div>
  );
}
