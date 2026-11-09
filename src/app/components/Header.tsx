"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

function ChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
    </svg>
  );
}

function ExternalArrow({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

// Arrow for links that open in a new tab, with the same cue for screen readers.
function ExternalMark({ className }: { className?: string }) {
  return (
    <>
      <ExternalArrow className={className} />
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function LogoGroup() {
  return (
    <Link
      href="/"
      className="flex items-center gap-[16px] xl:gap-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] rounded-md"
    >
      <Image
        src="/brain-center.png"
        alt="BRAIN, Building Reliable Advances and Innovations in Neurotechnology"
        width={470}
        height={137}
        priority
        className="h-[36px] xl:h-[44px] w-auto object-contain"
      />

      {/* Divider and NSF seal. The funding acknowledgment text lives in the footer. */}
      <span aria-hidden="true" className="h-[32px] xl:h-[36px] w-px bg-white/25" />
      <Image
        src="/nsf-logo.png"
        alt="U.S. National Science Foundation"
        width={48}
        height={48}
        className="h-[36px] xl:h-[44px] w-auto object-contain"
      />
    </Link>
  );
}

type NavSubItem = { label: string; href: string };
type NavSection = { heading?: string; items: NavSubItem[] };
type NavGroup = { label: string; items?: NavSubItem[]; sections?: NavSection[] };
type NavSingle = { label: string; href: string };
type NavItem = NavGroup | NavSingle;

function isNavGroup(item: NavItem): item is NavGroup {
  return "items" in item || "sections" in item;
}

function isCurrent(pathname: string, href: string) {
  return !isExternal(href) && pathname === href;
}

// Donate is a button, not a nav link, so it is rendered separately.
const MAIN_NAV: NavItem[] = [
  {
    label: "About",
    items: [
      { label: "Media", href: "/media" },
      { label: "NSF IUCRC", href: "/about/iucrc" },
      { label: "Uniqueness", href: "/about/uniqueness" },
      { label: "Intellectual Property", href: "/about/intellectual-property" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Research",
    items: [
      { label: "Thrusts", href: "/research/thrusts" },
      { label: "Current Projects", href: "/research/current-projects" },
      { label: "Past Projects", href: "/research/past-projects" },
      { label: "Facilities", href: "/research/facilities" },
    ],
  },
  {
    label: "Impacts",
    items: [
      { label: "Making an Impact", href: "/impacts/making-an-impact" },
      { label: "Economic Impact", href: "/impacts/economic-impact" },
      { label: "Broader Impacts", href: "/impacts/broader-impacts" },
      { label: "Academic Assessments", href: "/impacts/academic-assessments" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    label: "Organization",
    sections: [
      {
        heading: "Structure",
        items: [
          { label: "BRAIN Sites", href: "/organization/sites" },
          { label: "Industry Members", href: "/organization/industry-members" },
          { label: "Industry Advisory Board (IAB)", href: "/organization/iab" },
        ],
      },
      {
        heading: "People",
        items: [
          { label: "Leadership", href: "/organization/leadership" },
          { label: "Faculty", href: "/organization/faculty" },
          { label: "Students", href: "/organization/students" },
          { label: "Staff", href: "/organization/staff" },
        ],
      },
    ],
  },
  {
    label: "Workforce",
    sections: [
      {
        heading: "Information",
        items: [
          { label: "Overview", href: "/workforce/information" },
          { label: "REU Supplement", href: "/workforce/reu-supplement" },
          {
            label: "BRAIN Student Network",
            href: "/workforce/brain-student-network",
          },
          { label: "Training", href: "/workforce/training" },
        ],
      },
      {
        heading: "External Programs",
        items: [
          { label: "REU Website", href: "https://reu.egr.uh.edu/overview" },
          {
            label: "REU Regulatory Science",
            href: "https://reu.egr.uh.edu/regulatory-science",
          },
          { label: "NSAP (Post-Bacc)", href: "https://www.egr.uh.edu/nsap/about" },
          { label: "REM (Research Mentoring)", href: "https://reu.egr.uh.edu/rem" },
        ],
      },
    ],
  },
  {
    label: "Membership",
    items: [
      { label: "Innovation Catalysts", href: "/membership/catalysts" },
      { label: "Benefits", href: "/membership/benefits" },
      { label: "Join", href: "/join" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)]";

// Inside a dropdown panel the ring sits inside the link so the panel edge does not clip it.
const panelLinkFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--luminous-mint)]";

// One Donate button shared by the desktop nav and the mobile menu so the two cannot drift.
const donateButton = `inline-flex items-center justify-center rounded-md bg-teal-ink px-5 text-sm font-semibold text-white hover:bg-teal-ink-hover motion-safe:transition-colors ${focusRing}`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close the open dropdown. If keyboard focus is inside it, move focus to its button first so it is not lost.
  function closeDropdown() {
    const trigger = navRef.current?.querySelector<HTMLElement>('[aria-expanded="true"]');
    if (trigger?.closest("li")?.contains(document.activeElement)) trigger.focus();
    setOpenMenu(null);
  }

  // Close menus when the route changes, including browser Back and Forward.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
      if (openMenu !== null) closeDropdown();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, openMenu]);

  // Dismiss an open dropdown when the pointer goes down anywhere outside the desktop nav.
  useEffect(() => {
    if (openMenu === null) return;
    function onPointerDown(e: PointerEvent) {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  // Crossing the desktop breakpoint resets both menus, so nothing stale reappears on the way back.
  // The control that had focus is about to be hidden, so hand focus to its counterpart.
  // 80rem must match Tailwind's xl and the --header-h breakpoint in globals.css.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 80rem)");
    const onChange = () => {
      const focusInHeader = headerRef.current?.contains(document.activeElement);
      setOpenMenu(null);
      if (desktop.matches) setMobileOpen(false);
      if (focusInHeader) {
        const target = desktop.matches
          ? headerRef.current?.querySelector<HTMLElement>('a[href="/"]')
          : menuButtonRef.current;
        target?.focus();
      }
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  // While the mobile menu is open: start from the top of the page, lock page scroll and make
  // the page behind the menu inert so Tab cannot reach it.
  useEffect(() => {
    if (!mobileOpen) return;
    window.scrollTo({ top: 0, behavior: "instant" });

    const behind = Array.from(document.body.children).filter(
      (el) =>
        el !== headerRef.current &&
        !el.tagName.startsWith("NEXT") &&
        !el.hasAttribute("inert"),
    );
    behind.forEach((el) => el.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";

    return () => {
      behind.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="relative z-50 text-white bg-[var(--midnight-blue)] border-b border-white/10 shadow-xl">
      <div className="shell flex h-[calc(var(--header-h)-1px)] items-center justify-between">
        <LogoGroup />

        <button
          ref={menuButtonRef}
          className={`xl:hidden inline-flex h-[44px] w-[44px] flex-none items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10 ${focusRing}`}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls={mobileOpen ? "mobile-nav" : undefined}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav ref={navRef} aria-label="Primary" className="hidden xl:block h-full">
          <ul className="flex items-center gap-7 h-full text-sm font-medium">
              {MAIN_NAV.map((item) => (
                <li
                  key={item.label}
                  className="relative h-full flex items-center"
                  onBlur={(e) => {
                    // Keyboard focus moved to something outside this item, so close its dropdown.
                    if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenMenu((v) => (v === item.label ? null : v));
                    }
                  }}
                >
                  {isNavGroup(item) ? (
                    <>
                      <button
                        className="-mx-2 flex min-h-11 items-center gap-1 px-2 py-2 group motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] rounded-md"
                        aria-expanded={openMenu === item.label}
                        aria-controls={`nav-menu-${item.label.toLowerCase()}`}
                        onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                      >
                        <span
                          className={
                            openMenu === item.label
                              ? "text-[var(--luminous-mint)]"
                              : "text-white/90 group-hover:text-[var(--luminous-mint)]"
                          }
                        >
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-[0.7em] h-[0.7em] motion-safe:transition-transform ${openMenu === item.label ? "rotate-180" : ""} ${
                            openMenu === item.label
                              ? "text-[var(--luminous-mint)]"
                              : "text-white/90 group-hover:text-[var(--luminous-mint)]"
                          }`}
                        />
                      </button>

                      <div
                        id={`nav-menu-${item.label.toLowerCase()}`}
                        className={`absolute left-0 top-full mt-0 w-60 rounded-b-xl border border-t-0 border-white/10 bg-[var(--midnight-blue)] p-1 shadow-2xl motion-safe:transition-[opacity,scale,translate,visibility] origin-top ${
                          openMenu === item.label
                            ? "motion-safe:duration-200 visible opacity-100 scale-100 translate-y-0"
                            : `invisible opacity-0 scale-95 -translate-y-2 pointer-events-none ${
                                // Another panel is opening, so this one leaves at once instead of ghosting over it.
                                openMenu !== null ? "motion-safe:duration-0" : "motion-safe:duration-200"
                              }`
                        }`}
                        // A closed panel is inert so Tab cannot land in it while it fades out.
                        inert={openMenu !== item.label}
                      >
                        {item.sections ? (
                          <div>
                            {item.sections.map((section, sIdx) => (
                              <div key={sIdx}>
                                {sIdx > 0 && (
                                  <div className="mx-3 my-1 h-px bg-white/[0.15]" />
                                )}
                                <div>
                                {section.heading && (
                                  <p className="px-4 pt-2 pb-1 text-xs uppercase tracking-widest font-semibold text-white/70">
                                    {section.heading}
                                  </p>
                                )}
                                <ul>
                                  {section.items.map((sub, idx) => (
                                    <li key={`${sub.href}-${idx}`}>
                                      <Link
                                        className={`flex items-center justify-between px-4 py-2.5 text-[13px] motion-safe:transition-colors hover:bg-white/5 hover:text-white ${panelLinkFocus} ${isCurrent(pathname, sub.href) ? "text-[var(--luminous-mint)] font-semibold" : "text-white/80"}`}
                                        href={sub.href}
                                        aria-current={isCurrent(pathname, sub.href) ? "page" : undefined}
                                        target={isExternal(sub.href) ? "_blank" : undefined}
                                        rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                                        onClick={closeDropdown}
                                      >
                                        <span>{sub.label}</span>
                                        {isExternal(sub.href) && (
                                          <ExternalMark className="w-3 h-3" />
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <ul>
                            {item.items?.map((sub, idx) => (
                              <li key={`${sub.href}-${idx}`}>
                                <Link
                                  className={`flex items-center justify-between px-4 py-2.5 text-[13px] motion-safe:transition-colors hover:bg-white/5 hover:text-white ${panelLinkFocus} ${isCurrent(pathname, sub.href) ? "text-[var(--luminous-mint)] font-semibold" : "text-white/80"}`}
                                  href={sub.href}
                                  aria-current={isCurrent(pathname, sub.href) ? "page" : undefined}
                                  target={isExternal(sub.href) ? "_blank" : undefined}
                                  rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                                  onClick={closeDropdown}
                                >
                                  <span>{sub.label}</span>
                                  {isExternal(sub.href) && (
                                    <ExternalMark className="w-3 h-3" />
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        className={`-mx-2 min-h-11 px-2 py-2 group motion-safe:transition-colors flex items-center gap-1.5 rounded-md ${focusRing}`}
                        href={item.href}
                        aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                        target={isExternal(item.href) ? "_blank" : undefined}
                        rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                        onClick={closeDropdown}
                      >
                        <span className="text-white/90 group-hover:text-[var(--luminous-mint)]">
                          {item.label}
                        </span>
                        {isExternal(item.href) && (
                          <ExternalMark className="w-3 h-3 text-white/60 group-hover:text-[var(--luminous-mint)] motion-safe:transition-colors" />
                        )}
                      </Link>
                    </>
                  )}
                </li>
              ))}

            <li>
              <Link
                href="/donate"
                className={`${donateButton} h-11`}
                onClick={closeDropdown}
              >
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="xl:hidden absolute top-full left-0 w-full bg-[var(--midnight-blue)] border-t border-white/10 shadow-2xl h-[calc(100dvh-var(--header-h)+1px)] overflow-y-auto">
          <div className="shell pt-6">
            <Link
              href="/donate"
              className={`${donateButton} min-h-11 w-full sm:w-auto sm:px-8`}
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
          <ul className="shell flex flex-col pt-4 pb-8">
            {MAIN_NAV.map((item) => (
              <li
                key={item.label}
                className="border-b border-white/5 last:border-0 sm:max-w-md"
              >
                {isNavGroup(item) ? (
                  <details
                    name="mobile-nav-group"
                    className="group"
                    onToggle={(e) => {
                      if (e.currentTarget.open) e.currentTarget.scrollIntoView({ block: "nearest" });
                    }}
                  >
                    <summary className={`-mx-2 flex min-h-11 cursor-pointer items-center justify-between rounded-md px-2 py-2 text-lg font-semibold text-white/90 hover:text-[var(--luminous-mint)] active:text-[var(--luminous-mint)] motion-safe:transition-colors ${focusRing}`}>
                      {item.label}
                      <ChevronDown className="w-5 h-5 motion-safe:transition-transform group-open:rotate-180 text-white/60" />
                    </summary>
                    <div className="mb-3 ml-2 border-l border-white/10 pl-5">
                      {item.sections ? (
                        item.sections.map((section, sIdx) => (
                          <div key={sIdx}>
                            {sIdx > 0 && <div className="my-3 h-px bg-white/[0.15]" />}
                            {section.heading && (
                              <p className="mb-1 text-xs uppercase tracking-widest font-semibold text-white/70">
                                {section.heading}
                              </p>
                            )}
                            <ul>
                              {section.items.map((sub, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={sub.href}
                                    className={`-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 text-[15px] hover:text-[var(--luminous-mint)] ${focusRing} ${isCurrent(pathname, sub.href) ? "text-[var(--luminous-mint)] font-semibold" : "text-white/70"}`}
                                    aria-current={isCurrent(pathname, sub.href) ? "page" : undefined}
                                    onClick={() => setMobileOpen(false)}
                                    target={isExternal(sub.href) ? "_blank" : undefined}
                                    rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                                  >
                                    <span>{sub.label}</span>
                                    {isExternal(sub.href) && (
                                      <ExternalMark className="w-3.5 h-3.5 opacity-60" />
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                      ) : (
                        <ul>
                          {item.items?.map((sub, idx) => (
                            <li key={idx}>
                              <Link
                                href={sub.href}
                                className={`-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 text-[15px] hover:text-[var(--luminous-mint)] ${focusRing} ${isCurrent(pathname, sub.href) ? "text-[var(--luminous-mint)] font-semibold" : "text-white/70"}`}
                                aria-current={isCurrent(pathname, sub.href) ? "page" : undefined}
                                onClick={() => setMobileOpen(false)}
                                target={isExternal(sub.href) ? "_blank" : undefined}
                                rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                              >
                                <span>{sub.label}</span>
                                {isExternal(sub.href) && (
                                  <ExternalMark className="w-3.5 h-3.5 opacity-60" />
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className={`-mx-2 flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-lg font-semibold ${focusRing} ${isCurrent(pathname, item.href) ? "text-[var(--luminous-mint)]" : "text-white/90"}`}
                    aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    target={isExternal(item.href) ? "_blank" : undefined}
                    rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                  >
                    <span>{item.label}</span>
                    {isExternal(item.href) && (
                      <ExternalMark className="w-4 h-4 opacity-60" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
