import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4">
      <div className="text-center max-w-md w-full bg-white p-12 rounded-[32px] shadow-sm">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/f16456912c2ea25e0e34c6e3b910b3851fd83055?placeholderIfAbsent=true&apiKey=4caf9035840f43369456a3c67f1b7d2e"
          alt="Cefer Logo"
          className="object-contain w-36 mx-auto mb-8 aspect-[2.12]"
        />
        <h1 className="text-6xl font-bold mb-4 text-blue-600 tracking-tighter">404</h1>
        <p className="text-2xl font-semibold text-zinc-900 mb-2 tracking-tighter">Oops! Page not found</p>
        <p className="text-neutral-400 mb-8 tracking-tighter">
          The page you are looking for might have been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-[82px] transition-opacity hover:opacity-90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
