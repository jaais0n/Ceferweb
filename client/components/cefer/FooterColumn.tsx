import { Link } from "react-router-dom";

interface FooterColumnProps {
  title: string;
  items: string[];
}

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="flex flex-col grow font-semibold max-md:mt-10">
      <h4 className="self-center text-base tracking-tighter text-center text-zinc-900">
        {title}
      </h4>
      <nav className="flex flex-col items-start px-6 pt-5 pb-11 mt-4 text-xs tracking-tight leading-none bg-white rounded-lg shadow-2xl text-neutral-400 max-md:px-5">
        {items.map((item, index) => {
          const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <Link
              key={index}
              to={path}
              className={
                index === 0
                  ? "hover:text-blue-600 transition-colors"
                  : `mt-${index < 4 ? "2" : index < 6 ? "2.5" : "3"} hover:text-blue-600 transition-colors`
              }
            >
              {item}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
