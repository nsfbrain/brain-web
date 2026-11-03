// app/news/page.tsx
import type { Metadata } from "next";
import NewsGrid from "../components/news/NewsGrid";
import { sortedNewsItems } from "@/data/news";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest announcements, highlights, and stories from the BRAIN Center.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Press & Media"
        title="News"
        description="Recent announcements, highlights, and stories from the BRAIN Center."
      />
      <section className="shell py-12 md:py-16">
        <NewsGrid items={sortedNewsItems} />
      </section>
    </div>
  );
}