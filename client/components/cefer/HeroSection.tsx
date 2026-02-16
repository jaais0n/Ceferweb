import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="flex items-start mt-7 -mb-7 w-full max-md:mb-2.5 max-md:max-w-full">
      <div className="flex flex-col grow shrink-0 self-end mt-16 mr-0 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col self-end w-full text-7xl font-bold tracking-tighter text-center max-w-[953px] max-md:max-w-full max-md:text-4xl">
          <div className="flex gap-2.5 justify-center items-center p-2.5 text-zinc-900 max-md:text-4xl">
            <h1 className="self-stretch my-auto max-md:max-w-full max-md:text-4xl">
              Find, Contact & Close Your
            </h1>
          </div>
          <h1 className="z-10 self-center -mt-2.5 max-md:max-w-full max-md:text-4xl">
            Ideal Clients
          </h1>
        </div>
        <div className="mt-3 w-full max-w-[995px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[21%] max-md:ml-0 max-md:w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/72f2ee2077e3245980ebac2ff6af262a9e1cf227?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                alt="Decorative element"
                className="object-contain grow shrink-0 mt-5 max-w-full rounded-none aspect-[1.13] w-[186px] max-md:mt-10"
              />
            </div>
            <div className="ml-5 w-[79%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center text-xl tracking-tighter text-center text-zinc-900 max-md:mt-10 max-md:max-w-full">
                <p className="self-stretch max-md:max-w-full">
                  Cefer helps B2B teams find and connect with verified
                  decision-makers globally — faster, smarter, and more reliably
                  than ever.
                </p>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6005a1b29ce5f1ef5f096649212f198e2741b689?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                  alt="Feature showcase"
                  className="object-contain mt-8 max-w-full aspect-[26.32] w-[496px]"
                />
                <Link to="/signup" className="mt-7">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7024bda744680b4753069bc78ca284f69b0cdb03?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
                    alt="Call to action button"
                    className="object-contain max-w-full aspect-[7.04] rounded-[82px] w-[332px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="self-start">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/723b6dea217bf5ce96067b394c5b238f2dbfc411?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Side decoration"
          className="object-contain rounded-none aspect-[1.06] w-[184px] max-md:ml-2.5"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a538fa7d17da7b0470b9292f0105f7dd24a5284c?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Side decoration"
          className="object-contain mt-4 rounded-lg aspect-[1.1] w-[193px]"
        />
      </aside>
    </section>
  );
}
