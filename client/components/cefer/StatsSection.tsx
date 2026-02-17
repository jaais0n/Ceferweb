import * as React from "react";

export function StatsSection() {
  const stats = [
    { value: "3X", label: "More outbound leads" },
    { value: "25%", label: "More deals" },
    { value: "1000%", label: "More ROI" },
    { value: "10X", label: "More conversions" },
    { value: "100%", label: "Growth in pipeline" },
  ];

  return (
    <section className="flex flex-col items-center w-full py-20 px-4 bg-white">
      <h2 className="text-4xl font-bold text-center text-gradient-cefer mb-20 max-w-[1000px] py-2">
        Top revenue teams use Cefer to smash their goals
      </h2>

      <div className="flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-20 max-w-[1440px] w-full">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="text-6xl md:text-7xl font-semibold text-[#0E7BF5] mb-4 tracking-tight">
              {stat.value}
            </div>
            <p className="text-sm md:text-base text-cefer-black font-medium whitespace-nowrap">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
