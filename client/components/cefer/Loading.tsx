import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Loading() {
  const [isVisible, setIsVisible] = useState(false);
  const [bgFading, setBgFading] = useState(false);    // white fades fast
  const [logoFading, setLogoFading] = useState(false); // logo fades slowly after
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsVisible(true);
      setBgFading(false);
      setLogoFading(false);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    (window as any).triggerLoading = (path?: string) => {
      setIsVisible(true);
      setBgFading(false);
      setLogoFading(false);

      if (path) {
        try { navigate(path); } catch { /* ignore */ }
      }

      // White background fades out quickly after 90ms
      setTimeout(() => {
        setBgFading(true);
      }, 90);

      // Logo fades out slowly — starts a bit later, lingers longer
      setTimeout(() => {
        setLogoFading(true);
        // Unmount after logo finishes fading
        setTimeout(() => setIsVisible(false), 105);
      }, 120);
    };

    return () => { delete (window as any).triggerLoading; };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          {/* White background — fades out fast (200ms) */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              opacity: bgFading ? 0 : 1,
              transition: "opacity 60ms ease-out",
            }}
          />
          {/* Logo — fades out slowly (800ms), stays visible longer */}
          <img
            src="/Ceferlogo.png"
            alt="Loading"
            className="relative z-10 h-24 w-auto"
            style={{
              opacity: logoFading ? 0 : 1,
              transition: "opacity 105ms ease-in-out",
            }}
          />
        </div>
      )}
    </>
  );
}
