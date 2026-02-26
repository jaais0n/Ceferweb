"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

export function Loading() {
  const [isVisible, setIsVisible] = useState(false);
  const [bgFading, setBgFading] = useState(false);
  const [logoFading, setLogoFading] = useState(false);
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  const showLoading = useCallback(() => {
    setIsVisible(true);
    setBgFading(false);
    setLogoFading(false);
  }, []);

  const hideLoading = useCallback(() => {
    setBgFading(true);
    setLogoFading(true);
    setTimeout(() => setIsVisible(false), 80);
  }, []);

  // When pathname changes, the new page has rendered — hide the overlay
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      requestAnimationFrame(() => {
        hideLoading();
      });
    }
  }, [pathname, hideLoading]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setTimeout(showLoading, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [showLoading]);

  useEffect(() => {
    (window as any).triggerLoading = () => {
      showLoading();
      // Safety: auto-hide after 300ms if no route change occurs
      setTimeout(() => {
        hideLoading();
      }, 300);
    };
    return () => { delete (window as any).triggerLoading; };
  }, [showLoading, hideLoading]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          {/* White background — fades out fast */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              opacity: bgFading ? 0 : 1,
              transition: "opacity 40ms ease-out",
            }}
          />
          {/* Logo — fades out quickly */}
          <img
            src="/Ceferlogo.png"
            alt="Loading"
            className="relative z-10 h-24 w-auto"
            style={{
              opacity: logoFading ? 0 : 1,
              transition: "opacity 60ms ease-in-out",
            }}
          />
        </div>
      )}
    </>
  );
}
