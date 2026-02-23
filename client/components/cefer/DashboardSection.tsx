import { useRef, useState } from "react";

export function DashboardSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="flex flex-col items-center w-full px-4 py-6 md:py-16 relative z-10">
      {/* Our Dashboard Heading */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-cefer-black mb-2">
        Our Dashboard
      </h2>

      {/* MacBook Frame using mac.svg */}
      <div
        className="relative w-full max-w-[900px]"
        style={{ aspectRatio: "996 / 582" }}
      >
        {/* mac.svg sits BEHIND the video as the frame */}
        <img
          src="/mac.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{ zIndex: 0 }}
          draggable={false}
        />

        {/* Video sits ON TOP, positioned over the screen area of mac.svg */}
        <div
          className="absolute group"
          style={{
            top: "4%",
            left: "9.5%",
            right: "9.5%",
            bottom: "9%",
            zIndex: 1,
          }}
        >
          <video
            ref={videoRef}
            src="/dashvdo.mp4"
            className="w-full h-full object-cover"
            playsInline
            onEnded={() => setPlaying(false)}
          />
          {/* Play / Pause overlay */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center transition-all duration-200"
            style={{ background: playing ? "transparent" : "rgba(0,0,0,0.22)" }}
            aria-label={playing ? "Pause" : "Play"}
          >
            {!playing && (
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.92)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5.14v14l11-7-11-7z" fill="#0e7bf5" />
                </svg>
              </div>
            )}
            {playing && (
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.92)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="5" width="4" height="14" rx="1" fill="#0e7bf5" />
                  <rect x="14" y="5" width="4" height="14" rx="1" fill="#0e7bf5" />
                </svg>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
