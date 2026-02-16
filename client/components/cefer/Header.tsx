import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-start self-center w-full max-w-[1195px] max-md:max-w-full">
      <Link to="/">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f16456912c2ea25e0e34c6e3b910b3851fd83055?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Cefer Logo"
          className="object-contain shrink-0 w-36 max-w-full aspect-[2.12]"
        />
      </Link>
      <nav className="flex self-stretch px-14 my-auto bg-white shadow-sm rounded-[82px] max-md:px-5 max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/75d81dae-b654-423b-904d-621e58583563?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Navigation toggle"
          className="object-contain shrink-0 max-w-full bg-blue-600 aspect-[2.21] rounded-[82px] w-[104px]"
        />
        <div className="flex flex-col grow shrink-0 justify-center items-center self-start px-16 py-2 mt-3.5 rounded-none basis-0 w-fit max-md:px-5">
          <div className="flex gap-5 justify-between max-w-full w-[101px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b0702b1aab2b56e3e24d591d99f901301de6e773?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
              alt="Menu item"
              className="object-contain shrink-0 w-2 aspect-[2]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b0702b1aab2b56e3e24d591d99f901301de6e773?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
              alt="Menu item"
              className="object-contain shrink-0 w-2 aspect-[2]"
            />
          </div>
        </div>
      </nav>
      <div className="flex gap-6 mt-3 text-base font-semibold tracking-tighter text-center">
        <Link to="/signin" className="my-auto text-zinc-900">Sign In</Link>
        <div className="flex flex-col justify-center px-1.5 py-1.5 text-white bg-blue-300 bg-opacity-10 rounded-[82px]">
          <div className="flex flex-col justify-center p-0.5 bg-blue-300 bg-opacity-40 rounded-[82px]">
            <div className="flex flex-col justify-center px-1 py-1 bg-blue-400 bg-opacity-60 rounded-[82px]">
              <Link to="/signup" className="px-7 pt-3 pb-5 bg-blue-600 rounded-[82px] max-md:px-5">
                Try Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
