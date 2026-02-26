"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Thin blue progress bar at the top of the page.
 * - Triggers on every route change (different page)
 * - Triggers on same-page link clicks (so user gets feedback even when nothing changes)
 */
export function NavProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const start = () => {
    clear();
    setWidth(0);
    setVisible(true);
    // Jump to 80% quickly, then finish on complete
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWidth(80);
      });
    });
    // Auto-complete after 350ms in case route didn't change
    timerRef.current = setTimeout(() => finish(), 350);
  };

  const finish = () => {
    clear();
    setWidth(100);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 300);
  };

  // Trigger on route change
  useEffect(() => {
    finish();
  }, [pathname]);

  // Trigger on any internal link click (catches same-page clicks too)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      // Only internal links
      if (href && href.startsWith("/")) {
        start();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[99999] h-[3px] pointer-events-none"
      style={{
        width: `${width}%`,
        background: "linear-gradient(to right, #3b82f6, #60a5fa)",
        transition: width === 100
          ? "width 0.25s ease"
          : width === 80
            ? "width 0.3s cubic-bezier(0.4,0,0.2,1)"
            : "none",
        boxShadow: "0 0 8px rgba(59,130,246,0.7)",
      }}
    />
  );
}
