import * as React from "react";

export function DashboardSection() {
  return (
    <section className="flex flex-col items-center w-full px-4 py-6 md:py-16 relative z-10">
      {/* Our Dashboard Heading */}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-cefer-black mb-2">
        Our Dashboard
      </h2>

      {/* Dashboard Image in Laptop Frame */}
      <div className="relative max-w-[950px] w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/98fbea267f1e50dffed3c54665f33e817f22d3c1?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Dashboard interface preview"
          className="object-contain w-full rounded-t-xl"
        />

      </div>
    </section>
  );
}
