export function DashboardSection() {
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

        {/* Video sits ON TOP, auto-plays and loops silently */}
        <div
          className="absolute"
          style={{
            top: "4%",
            left: "9.5%",
            right: "9.5%",
            bottom: "9%",
            zIndex: 1,
          }}
        >
          <video
            src="/dashvdo.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
