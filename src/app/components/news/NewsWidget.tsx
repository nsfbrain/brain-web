// components/news/NewsWidget.tsx
import Link from "next/link";
import { sortedNewsItems } from "@/data/news";
import { sortedMediaItems } from "@/data/media";
import { NewsCard } from "../cards/NewsCard";
import { MediaCard } from "../cards/MediaCard";

const MAX_ITEMS = 3;

type FeedEntry =
  | { type: "news"; item: (typeof sortedNewsItems)[number] }
  | { type: "media"; item: (typeof sortedMediaItems)[number] };

const feed: FeedEntry[] = [
  ...sortedNewsItems.map((item) => ({ type: "news" as const, item })),
  ...sortedMediaItems.map((item) => ({ type: "media" as const, item })),
].sort((a, b) => new Date(b.item.date).getTime() - new Date(a.item.date).getTime());

const recent = feed.slice(0, MAX_ITEMS);

export function NewsWidget() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <header className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--midnight-blue)]">Latest news and media</h2>
          <div className="ml-auto flex items-baseline gap-5">
            <Link
              href="/news"
              className="py-3 text-sm font-semibold text-[var(--teal-ink)] hover:underline"
            >
              View all news &rarr;
            </Link>
            <Link
              href="/events"
              className="py-3 text-sm font-semibold text-[var(--teal-ink)] hover:underline"
            >
              View events &rarr;
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((entry) => {
            if (entry.type === "news") {
              const item = entry.item;
              return (
                <NewsCard
                  key={`news-${item.slug}`}
                  title={item.title}
                  dateLabel={item.dateLabel}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  href={item.href}
                  aspectRatio="16/9"
                />
              );
            }

            const item = entry.item;
            return (
              <MediaCard
                key={`media-${item.id}`}
                title={item.title}
                dateLabel={item.dateLabel}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                href={item.href}
                external={item.external}
                aspectRatio="16/9"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NewsWidget;
