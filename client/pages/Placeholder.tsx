import { Link, useLocation } from "react-router-dom";
import { Header } from "@/components/cefer/Header";
import { Footer } from "@/components/cefer/Footer";

const Placeholder = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace(/-/g, " ");
  const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <div className="overflow-hidden bg-white min-h-screen flex flex-col">
      <div className="bg-neutral-100 pt-4">
        <Header />
      </div>
      
      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tighter">
          {capitalizedPageName || "Coming Soon"}
        </h1>
        <p className="text-xl text-neutral-400 max-w-md mb-8 tracking-tighter">
          We're currently working on this page. Please continue prompting to fill in this page contents if you want it!
        </p>
        <Link
          to="/"
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-[82px] transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default Placeholder;
