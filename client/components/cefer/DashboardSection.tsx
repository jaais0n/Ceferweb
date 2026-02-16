import * as React from "react";

export function DashboardSection() {
  return (
    <section className="flex flex-col items-center w-full max-md:max-w-full">
      <h2 className="mt-24 text-4xl font-bold tracking-tighter text-center text-zinc-900 max-md:mt-10">
        Our Dashboard
      </h2>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/98fbea267f1e50dffed3c54665f33e817f22d3c1?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
        alt="Dashboard interface preview"
        className="object-contain mt-11 w-full aspect-[1.71] max-w-[996px] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
}
