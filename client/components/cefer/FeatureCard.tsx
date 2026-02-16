import * as React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`flex flex-col items-center font-semibold text-center ${className}`}
    >
      <img
        src={icon}
        alt={`${title} icon`}
        className="object-contain w-14 h-14 bg-white rounded-full aspect-square shadow-[0px_1px_6px_rgba(0,0,0,0.18)]"
      />
      <h3 className="mt-1.5 text-2xl tracking-tighter text-zinc-900">
        {title}
      </h3>
      <p className="self-stretch mt-1.5 text-base tracking-tighter text-neutral-400">
        {description}
      </p>
    </article>
  );
}
