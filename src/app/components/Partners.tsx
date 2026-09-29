import Image from "next/image";
import Card from "./cards/primitives/Card";
import { sites, type Site, type SiteCategory } from "@/data/sites";
import { isSvg } from "@/lib/image";

// Wrapping flex rather than a grid, so an incomplete last row stays centred.
const LAYOUT = "flex flex-wrap justify-center gap-6";

type LogoGroup = { label: string };

// A Record rather than an array: adding a SiteCategory is then a type error
// here, instead of a whole category silently vanishing from the homepage.
// Render order is the key order below.
const GROUPS: Record<SiteCategory, LogoGroup> = {
  "BRAIN Site": { label: "BRAIN Sites" },
  "External Collaborating Site": { label: "External Collaborating Sites" },
  "International Affiliate Site": { label: "International Affiliate Sites" },
};

const GROUP_ENTRIES = Object.entries(GROUPS) as [SiteCategory, LogoGroup][];

export default function Partners() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--teal-ink)] mb-2">
          Our Network
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--midnight-blue)] mb-12">
          BRAIN Sites &amp; Partners
        </h2>

        <div className="space-y-12">
          {GROUP_ENTRIES.map(([category, group]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600 mb-6">
                {group.label}
              </h3>
              <div className={LAYOUT}>
                {sites
                  .filter((site) => site.category === category)
                  .map((site) => (
                    <Logo key={site.id} site={site} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Logo({ site }: { site: Site }) {
  return (
    <Card
      href={site.link}
      external
      aria-label={site.name}
      className="flex w-[calc(50%-0.75rem)] items-center justify-center border border-slate-200 bg-white p-4 sm:w-56"
    >
      {/* bg-white above is required: partner marks always sit on white, never
          a teal or navy panel. Hover feedback lives on the tile, not the image. */}
      <div className="relative h-24 w-full">
        <Image
          src={site.logos.full}
          alt={site.name}
          fill
          className="object-contain"
          sizes="224px"
          unoptimized={isSvg(site.logos.full)}
        />
      </div>
    </Card>
  );
}
