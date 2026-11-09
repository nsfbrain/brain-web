import type React from "react";
import fs from "fs";
import path from "path";
import { imageSize } from "image-size";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLinkIcon, ExternalLinkNote } from "@/app/components/ExternalLinkIcon";
import { sortedNewsItems } from "@/data/news";

type Props = { params: Promise<{ slug: string }> };

const articles = sortedNewsItems.filter((item) => item.page);

// Only the slugs listed by generateStaticParams exist. Anything else is a static 404, never an on-demand render.
export const dynamicParams = false;

// Read the real pixel size at build time so the image box hugs the picture at any ratio.
function readImageSize(src: string) {
  const { width, height } = imageSize(fs.readFileSync(path.join(process.cwd(), "public", src)));
  return { width, height };
}

export function generateStaticParams() {
  return articles.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = articles.find((a) => a.slug === slug);
  if (!item) notFound();
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: { title: item.title, description: item.summary, images: [item.imageSrc] },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = articles.find((a) => a.slug === slug);
  if (!item) notFound();

  const paragraphs = item.content.trim().split(/\n{2,}/);
  const { width, height } = readImageSize(item.imageSrc);
  const imageVars = { "--r": width / height, "--w": `${width}px` } as React.CSSProperties;

  return (
    <div className="bg-white">
      <article className="shell py-12 md:py-16">
        <div className="space-y-6">
          <Link
            href="/news"
            className="-ml-2 inline-flex min-h-11 items-center gap-1 rounded-md px-2 text-sm font-medium text-slate-700 hover:text-teal-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-ink focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">&larr;</span> Back to news
          </Link>

          <div className="space-y-3">
            <p className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wider text-teal-ink">
              <time dateTime={item.date}>{item.dateLabel}</time>
              {item.upcoming && (
                <span className="rounded-full border border-slate-300 px-2.5 py-0.5 text-xs font-medium normal-case tracking-normal text-slate-700">
                  Upcoming
                </span>
              )}
            </p>

            {/* One grid, two columns from lg: title and body on the left, the image beside them
                starting level with the title. Below lg the image sits between the title and body.
                The text column is 65ch and the image anchors to the right edge of the page. The second row
                takes the extra height so a short title never leaves a gap above the text. */}
            <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,65ch)_minmax(0,1fr)] lg:grid-rows-[auto_1fr]">
              <h1 className="max-w-[28ch] text-3xl font-extrabold leading-tight tracking-tight text-[var(--midnight-blue)] sm:text-4xl lg:col-start-1 lg:row-start-1 lg:self-start">
                {item.title}
              </h1>

              {/* h-auto keeps the ratio; the max-width caps (the column, the height limit, the
                  file's own width) keep the box free of filler space. The height limit is 16rem
                  below lg and 20rem from lg, applied through the --r (ratio) and --w (file width) vars. */}
              <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-self-end lg:self-start lg:w-[22rem]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={width}
                  height={height}
                  sizes="(max-width: 1024px) 100vw, 352px"
                  className="block h-auto w-full max-w-[min(100%,calc(16rem*var(--r)),var(--w))] rounded-xl lg:max-w-[min(100%,calc(20rem*var(--r)),var(--w))]"
                  style={imageVars}
                  preload
                />
              </div>

              <div className="space-y-8 lg:col-start-1 lg:row-start-2">
                <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                  {paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>

                {item.links && (
                  <div className="flex flex-wrap gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 rounded-md bg-teal-ink px-5 py-3 font-semibold text-white hover:bg-teal-ink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-ink focus-visible:ring-offset-2 motion-safe:transition-colors motion-safe:duration-150"
                      >
                        {link.label}
                        <ExternalLinkIcon className="h-4 w-4" />
                        <ExternalLinkNote />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
