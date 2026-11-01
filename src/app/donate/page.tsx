import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support neurotechnology research and innovation at the BRAIN Center through the University of Houston giving portal.",
  alternates: { canonical: "/donate" },
};

const BENEFITS = [
  {
    title: "Student training",
    body: "Hands-on research experience for the next generation of engineers.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zM5 10.5V16c0 1.5 3 3 7 3s7-1.5 7-3v-5.5M12 14v6"
      />
    ),
  },
  {
    title: "Cross-institution collaboration",
    body: "Joint projects across every BRAIN Center partner institution.",
    icon: (
      <>
        <circle cx="8.5" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5M14.5 15.5c2.3 0 4.5 1.6 4.5 4.5"
        />
      </>
    ),
  },
  {
    title: "Safe neurotechnology",
    body: "Development and testing of dependable, reliable devices.",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"
        />
      </>
    ),
  },
];

const STEPS = [
  <>
    Under <strong>Choose your fund(s)</strong>, use the Search Funds box.
  </>,
  <>
    Type <strong>&quot;Brain Gifts&quot;</strong> and select it from the results.
  </>,
  <>Choose your gift amount and click Next.</>,
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Support"
        title="Donate"
        description="Help accelerate safe, reliable neurotechnology that improves quality of life."
      />

      <section className="mx-auto max-w-5xl px-6 sm:px-8 py-10 sm:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--midnight-blue)]">
          Why your gift matters
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-800">
          The BRAIN Center brings together the University of Houston, Arizona
          State University, and partner institutions to turn interdisciplinary
          brain research into neurotechnology that&apos;s safe, reliable, and
          genuinely useful. Your gift makes that work possible.
        </p>

        <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-[var(--midnight-blue)]">
          What your gift supports
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 rounded-2xl bg-[var(--light-slate)] p-6"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--deep-teal)"
                strokeWidth={1.5}
              >
                {benefit.icon}
              </svg>
              <p className="text-base font-semibold text-[var(--midnight-blue)]">
                {benefit.title}
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[var(--midnight-blue)] px-6 py-10 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--deep-teal)]">
              How to Give
            </p>
            <h2 className="mt-3 text-xl sm:text-2xl font-bold text-white">
              You&apos;ll be redirected to the University of Houston&apos;s
              secure giving portal to complete your gift.
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={i} className="flex flex-col gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--deep-teal)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/70">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="https://giving.uh.edu/gift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-[var(--teal-ink)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-ink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--midnight-blue)]"
            >
              Support the BRAIN Center ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
