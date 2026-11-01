// Server Component (no "use client")
// Layout-agnostic: the host page owns the section, background, and container.
// Lives on /events (see src/app/events/page.tsx).
// showNav=1 is intentional: the calendar has its own page now, so month navigation is useful.
const CALENDAR_SRC =
  "https://calendar.google.com/calendar/embed?height=700&wkst=1&ctz=America%2FChicago&showPrint=0&showTitle=0&showNav=1&showCalendars=0&src=Y2RjZjBhYTI3ODA5OGI2YjE4YjI0ODIzMWEzYWMxZjYwNmEyMzA5Njg2NGU5MWU4Yjk1N2U2N2M4ZjIzZjlkNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2300a79d";

export default function CalendarEmbed() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[var(--midnight-blue)] mb-6">
        Events Calendar
      </h2>
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <iframe
          title="BRAIN Center Events Calendar"
          src={CALENDAR_SRC}
          className="block w-full h-[700px] border-0"
          loading="lazy"
          scrolling="no"
        />
      </div>
    </div>
  );
}
