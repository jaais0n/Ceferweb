"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Placeholder = () => {
  const pathname = usePathname();
  const pageName = pathname.substring(1).replace(/-/g, " ");
  const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="overflow-hidden bg-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tighter">
          {capitalizedPageName || "Coming Soon"}
        </h1>
        <p className="text-xl text-neutral-400 max-w-md mb-8 tracking-tighter">
          We're currently working on this page. Check back soon for updates!
        </p>
        <Link
          href="/"
          className="inline-flex w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 text-white font-semibold rounded-[82px] transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </main>

    </div>
  );
};

export default Placeholder;
