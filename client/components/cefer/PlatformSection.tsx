import * as React from "react";

export function PlatformSection() {
  return (
    <section className="flex flex-col items-center mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4ded9dba-9506-4e53-866e-f757b17c69d8?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
        alt="Platform overview"
        className="object-contain self-stretch w-full aspect-[2.28] shadow-[0px_24px_24px_rgba(55,52,169,0.3)] max-md:max-w-full"
      />

      <h2 className="mt-80 text-2xl font-semibold tracking-tighter text-center text-cefer-black max-md:mt-10">
        All-in-One Platform Data You Can Trust
      </h2>
      <p className="text-base font-semibold tracking-tighter text-center text-neutral-400 max-md:max-w-full">
        From prospecting to enrichment, email verification, and intent signals,
        Cefer gives your team everything you need to grow your pipeline in one
        place.
      </p>

      <h3 className="mt-12 text-2xl font-semibold tracking-tighter text-center text-cefer-black max-md:mt-10">
        Easy to Integrate
      </h3>
      <p className="text-base font-semibold tracking-tighter text-center text-neutral-400 max-md:max-w-full">
        From prospecting to enrichment, email verification, and intent signals,
        Cefer gives your team everything you need to grow your pipeline in one
        place.
      </p>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/000e4d345870f2da430a4af9b365e5c52cfc0dbb?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
        alt="Integration showcase"
        className="object-contain mt-72 max-w-full aspect-[4.18] w-[832px] max-md:mt-10"
      />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/5693fc0d92f3bbdab1679b64719d31f053a96848?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
        alt="Platform features"
        className="object-contain self-stretch mt-48 w-full aspect-[9.9] max-md:mt-10 max-md:max-w-full"
      />
    </section>
  );
}
