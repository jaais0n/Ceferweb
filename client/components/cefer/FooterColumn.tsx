import { Link } from "react-router-dom";

interface FooterColumnProps {
  title: string;
  items: string[];
}

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="flex flex-col max-md:mt-10 min-w-[120px]">
      <h4 className="text-base font-bold tracking-tight text-cefer-black mb-6">
        {title}
      </h4>
      <nav className="flex flex-col items-start gap-4 text-sm font-medium tracking-tight text-zinc-500">
        {items.map((item, index) => {
          const path = `/${item.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <Link
              key={index}
              to={path}
              className="hover:text-cefer-blue transition-all duration-200"
            >
              {item}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
