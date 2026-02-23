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
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-2.5 pr-11 text-center text-[13px] sm:text-sm font-medium leading-snug">
        Download our new browser extension - click here
        <Link
          to="/chrome-extension"
          className="ml-1.5 underline underline-offset-2 font-semibold hover:text-white/90 whitespace-nowrap"
        >
          Get the extension
        </Link>
      </div>

      <button
        type="button"
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full text-sm leading-none text-white/95 transition hover:bg-white/15 hover:text-white"
        onClick={() => setVisible(false)}
      >
        x
      </button>
    </div>
  );
}
