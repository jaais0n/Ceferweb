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

      {/* MacBook Pro Frame */}
      <div className="relative w-full max-w-[900px] drop-shadow-2xl">
        {/* Lid / Screen */}
        <div
          className="relative w-full rounded-t-[18px] rounded-b-[6px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #d0d0d0 0%, #b8b8b8 40%, #c8c8c8 100%)",
            padding: "2px",
            boxShadow: "0 30px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.15)",
          }}
        >
          {/* Inner Screen surround (dark bezel) */}
          <div
            className="relative rounded-t-[16px] rounded-b-[4px] overflow-hidden"
            style={{ background: "#1c1c1e", padding: "22px 16px 10px" }}
          >
            {/* Camera */}
            <div className="absolute top-[7px] left-1/2 -translate-x-1/2 flex items-center gap-1">
              <div className="w-[8px] h-[8px] rounded-full bg-[#3a3a3a] flex items-center justify-center">
                <div className="w-[3px] h-[3px] rounded-full bg-[#555]" />
              </div>
            </div>

            {/* Video */}
            <div className="relative rounded-[4px] overflow-hidden group bg-black">
              <video
                ref={videoRef}
                src="/dashvdo.mp4"
                className="w-full block"
                playsInline
                onEnded={() => setPlaying(false)}
              />
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center transition-all duration-200"
                style={{ background: playing ? "transparent" : "rgba(0,0,0,0.25)" }}
                aria-label={playing ? "Pause" : "Play"}
              >
                {!playing && (
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.92)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5.14v14l11-7-11-7z" fill="#0e7bf5" />
                    </svg>
                  </div>
                )}
                {playing && (
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.92)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="5" width="4" height="14" rx="1" fill="#0e7bf5" />
                      <rect x="14" y="5" width="4" height="14" rx="1" fill="#0e7bf5" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Hinge bar */}
        <div
          className="w-full h-[10px]"
          style={{
            background: "linear-gradient(to bottom, #a0a0a0, #888)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        />

        {/* Base */}
        <div
          className="relative w-full h-[14px] rounded-b-[12px]"
          style={{
            background: "linear-gradient(to bottom, #c0c0c0, #a8a8a8)",
          }}
        >
          {/* Notch cutout */}
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[1px] w-[20%] h-[6px] rounded-b-[6px]"
            style={{ background: "linear-gradient(to bottom, #999, #888)" }}
          />
        </div>

        {/* Desk reflection */}
        <div
          className="mx-auto h-[3px] rounded-full mt-0"
          style={{
            width: "80%",
            background: "linear-gradient(to right, transparent, rgba(0,0,0,0.12), transparent)",
          }}
        />
      </div>
    </section>
  );
}
