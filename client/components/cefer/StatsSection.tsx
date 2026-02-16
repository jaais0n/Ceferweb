import * as React from "react";

export function StatsSection() {
  return (
    <section className="flex flex-col items-center w-full max-md:max-w-full">
      <h2 className="mt-44 text-4xl font-bold tracking-tighter text-center max-md:mt-10 max-md:max-w-full">
        Top revenue teams use Cefer to smash their goals
      </h2>
      <div className="mt-14 w-full max-w-[1003px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[82%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center max-md:mt-9">
                    <div className="self-center text-6xl font-semibold tracking-tighter text-blue-600 max-md:text-4xl">
                      3X
                    </div>
                    <p className="mt-10 text-xl tracking-tighter text-zinc-900">
                      More outbound leads
                    </p>
                  </div>
                </div>
                <div className="ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 rounded-none h-[113px] w-[131px] max-md:mt-9" />
                </div>
                <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 rounded-none h-[113px] w-[218px] max-md:mt-9" />
                </div>
                <div className="ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                  <div className="flex shrink-0 rounded-none h-[111px] w-[149px] max-md:mt-9" />
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 rounded-none h-[111px] w-[174px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
