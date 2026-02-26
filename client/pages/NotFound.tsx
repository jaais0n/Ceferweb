"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NotFound = () => {
  const router = useRouter();
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c <= 1) {
          clearInterval(timer);
          router.push("/");
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 opacity-60 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg w-full">
        {/* Logo */}
        <img
          src="/Ceferlogo.png"
          alt="Cefer Logo"
          className="object-contain h-12 mx-auto mb-10 w-auto"
        />

        {/* 404 big number */}
        <div className="relative inline-block mb-6">
          <span
            className="text-[10rem] md:text-[14rem] font-extrabold leading-none select-none"
            style={{
              backgroundImage: "linear-gradient(135deg, #0e7bf5 0%, #a78bfa 60%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Page not found
        </h1>
        <p className="text-gray-400 mb-10 text-base leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.<br />
          You&apos;ll be redirected to home in{" "}
          <span className="font-semibold text-[#0e7bf5]">{count}s</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3.5 bg-[#0e7bf5] text-white font-semibold rounded-full hover:bg-blue-600 transition-colors text-sm"
          >
            Go Home
          </button>
          <button
            onClick={() => router.back()}
            className="px-8 py-3.5 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:border-[#0e7bf5] hover:text-[#0e7bf5] transition-colors text-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
