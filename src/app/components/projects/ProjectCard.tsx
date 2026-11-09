// src/components/projects/ProjectCard.tsx
import React from "react";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  leaders: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string; // if present, card becomes clickable
};

export default function ProjectCard({
  title,
  leaders,
  imageSrc,
  imageAlt,
  href,
}: ProjectCardProps) {
  const content = (
    <article className="flex h-full items-stretch gap-4">
      {/* Optional square image on the left */}
      {imageSrc && (
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-20 sm:w-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt ?? ""}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <h2 className="text-base font-semibold text-slate-900">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Project Leaders:</span>{" "}
          {leaders}
        </p>

        {/* Only show “View details →” if this project has a link */}
        {href && (
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-ink">
            View details <span className="motion-safe:transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        )}
      </div>
    </article>
  );

  const baseClasses =
    "group h-full rounded-xl border border-slate-200 bg-white p-5 motion-safe:transition-shadow motion-safe:duration-150 hover:shadow-md";
  const linkedClasses = href
    ? " cursor-pointer hover:border-teal-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-ink focus-visible:ring-offset-2"
    : " cursor-default";

  // If href exists, wrap in <Link>; otherwise just a div
  if (href) {
    return (
      <Link href={href} className={baseClasses + linkedClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses + linkedClasses}>{content}</div>;
}