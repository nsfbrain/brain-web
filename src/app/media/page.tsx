// app/media/page.tsx
import type { Metadata } from "next";
import MediaGrid from "../components/MediaGrid";
import PageHeader from "../components/PageHeader";
import { sortedMediaItems as mediaItems } from "@/data/media";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photos, videos, and outreach materials from the BRAIN Center.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader
        eyebrow="Press & Media"
        title="BRAIN Media"
        description="Explore photos, videos, and outreach materials from the BRAIN Center."
      />
      <section className="shell py-12 md:py-16">
        <MediaGrid items={mediaItems} />
      </section>
    </div>
  );
}