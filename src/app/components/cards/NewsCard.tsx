// components/cards/NewsCard.tsx
import Image from "next/image";
import type { ElementType } from "react";
import Card from "./primitives/Card";
import { ExternalLinkIcon, ExternalLinkNote } from "../ExternalLinkIcon";

export type NewsCardProps = {
  title: string;
  dateLabel: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  upcoming?: boolean;
  imagePosition?: string;
  as?: ElementType;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "4/5";
};

const FALLBACK_SRC = "/logos/brain.png";

export function NewsCard({
  title,
  dateLabel,
  imageSrc,
  imageAlt,
  href,
  upcoming,
  imagePosition,
  as = "article",
  aspectRatio = "16/9",
}: NewsCardProps) {
  const hasImage = imageSrc !== FALLBACK_SRC;
  const isExternal = !!href && href.startsWith("http");

  return (
    <Card
      as={as}
      href={href}
      external={isExternal}
      className="h-full flex! flex-col overflow-hidden border border-slate-200 bg-white"
    >
      <Card.Media ratio={aspectRatio} className={hasImage ? "bg-slate-100" : "bg-[var(--midnight-blue)]"}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={hasImage ? "object-cover" : "object-contain p-8 opacity-80"}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </Card.Media>

      <Card.Body className="flex flex-col flex-1 border-t border-slate-100 bg-white px-4 py-4">
        <p className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium leading-snug">
          {dateLabel}
          {upcoming && (
            <span className="rounded-full border border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-700">
              Upcoming
            </span>
          )}
        </p>

        <Card.Title
          as="h3"
          className="mt-2 text-base font-semibold leading-snug text-[var(--midnight-blue)] line-clamp-4 mb-3"
        >
          {title}
        </Card.Title>

        {href && (
          <div className="mt-auto">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--teal-ink)] leading-snug">
              Read more
              {isExternal ? (
                <>
                  <ExternalLinkIcon />
                  <ExternalLinkNote />
                </>
              ) : (
                <span className="transition group-hover:translate-x-0.5">→</span>
              )}
            </span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default NewsCard;