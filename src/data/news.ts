// src/data/news.ts

export type NewsItem = {
  slug: string;
  title: string;
  date: string;       // ISO string for sorting: "2025-11-10" (first day for a multi-day event)
  endDate?: string;   // ISO last day of a multi-day event, used to decide when "Upcoming" ends
  dateLabel: string;  // Pretty: "Nov 10, 2025"
  summary: string;
  imageSrc: string;
  imageAlt: string;
  content: string;    // full article text, paragraphs separated by blank lines
  href?: string;      // external link; the card opens it instead of an article page
  page?: boolean;     // true: the item has its own article page at /news/[slug]
  links?: { label: string; href: string }[]; // related links shown on the article page
  imagePosition?: string; // CSS object-position for the card crop, e.g. "50% 20%" to keep a face in frame
  upcoming?: boolean; // derived in sortedNewsItems, never set by hand
};

// Upcoming lasts until the end of the event's last day, Central time (-06:00, a fixed offset is close enough).
// Static build: this is decided when the site is built, so redeploy after an event to clear the tag.
const isUpcoming = (item: NewsItem) =>
  new Date(`${item.endDate ?? item.date}T23:59:59-06:00`).getTime() > Date.now();

export const newsItems: NewsItem[] = [
  {
    slug: "brain-center-at-aaai-2027",
    title: "IUCRC BRAIN Center at AAAI 2027",
    date: "2027-02-22",
    endDate: "2027-02-23",
    dateLabel: "Feb 22–23, 2027",
    summary:
      "Center Director José Luis Contreras-Vidal is co-organizing the Workshop on Creative AI for Live Interactive Performances (CLIP) at the AAAI 2027 Annual Meeting.",
    page: true,
    imageSrc: "/news/brain-center-at-aaai-2027.jpg",
    imageAlt: "Call for Papers graphic showing dancers and musicians performing in front of a city skyline",
    links: [
      { label: "CLIP workshop website", href: "https://sites.google.com/view/clip27" },
    ],
    content: `
Center Director Pepe Contreras-Vidal is co-organizing a Workshop on Creative AI for Live Interactive Performances (CLIP) at the 2027 Association for the Advancement of Artificial Intelligence (AAAI) Annual Meeting.
    `,
  },
  {
    slug: "nabrzyski-aimbe-public-policy-institute",
    title: "BRAIN Graduate Student Piotr Nabrzyski Wins Fellowship to Attend the AIMBE Public Policy Institute",
    date: "2026-10-15",
    endDate: "2026-10-16",
    dateLabel: "Oct 15–16, 2026",
    summary:
      "The fellowship takes Piotr Nabrzyski to Washington, DC to learn from policy insiders how public policy shapes biomedical engineering.",
    page: true,
    imageSrc: "/news/nabrzyski-aimbe-public-policy-institute.jpg",
    imageAlt: "Portrait of BRAIN graduate student Piotr Nabrzyski",
    imagePosition: "50% 20%",
    links: [
      { label: "AIMBE Public Policy Institute", href: "https://aimbe.org/institute/" },
    ],
    content: `
BRAIN graduate student Piotr Nabrzyski won a fellowship to attend the AIMBE Public Policy Institute in Washington, DC, to learn from Washington insiders about how public policy impacts biomedical engineering.

Speakers include policy experts, members of government agencies such as the FDA and NIH, industry innovators, and government decision-makers.
    `,
  },
  {
    slug: "il-cervello-va-in-scena",
    title: "BRAIN Center Brings Art-Science Performances to Florence, Italy",
    date: "2026-06-06",
    dateLabel: "Jun 6, 2026",
    summary:
      "\"Il Cervello va in Scena\" at the Niccolini Theater showed how meditation, music and movement affect brain health, with the NSF Movement, Music, and Brain Health AccelNet and EBRAINS.",
    page: true,
    imageSrc: "/news/il-cervello-va-in-scena.jpg",
    imageAlt:
      "Presenters on stage at the Niccolini Theater in Florence in front of a screen reading \"Il Cervello va in Scena\"",
    content: `
The IUCRC BRAIN Center partnered with the NSF Movement, Music, and Brain Health AccelNet and E.U. EBRAINS to bring the "Il Cervello va in Scena" art-science performances to the Niccolini Theater in Florence, Italy. The performances demonstrate the power of meditation, music and movement on brain health and mental health.

The event was a collaboration with Prof. Francesco Pavone of the University of Florence, Director of the Italian Node of EBRAINS.
    `,
  },
  {
    slug: "contreras-vidal-nature-brain",
    title: "University of Houston BRAIN Center Finds Exposure to Nature Associated with Reductions in Negative Emotions",
    date: "2026-03-24",
    dateLabel: "Mar 24, 2026",
    summary:
      "Research Indicates an Urgent Need to Integrate Nature into Urban Design to Increase Brain health",
    href: "https://www.uh.edu/news-events/stories/2026/march/03242026-contreras-vidal-nature-brain.php",
    imageSrc: "/news/nature-brain-bridge-newsoom.jpg",
    imageAlt: "Nature BRAIN bridge",
    content: `
UH BRAIN Center findings on nature exposure associated with Brain health : https://www.uh.edu/news-events/stories/2026/march/03242026-contreras-vidal-nature-brain.php
    `,
  },
  {
    slug: "contreras-vidal-nai-senior-member",
    title: "Contreras-Vidal Elected to National Academy of Inventors",
    date: "2026-02-26",
    dateLabel: "Feb 26, 2026",
    summary:
      "Dr. José Luis Contreras-Vidal, director of the NSF IUCRC BRAIN Center, has been elected as a Senior Member of the National Academy of Inventors.",
    href: "https://www.uh.edu/news-events/stories/2026/february/02262026-nai-senior-members.php",
    imageSrc: "/news/contreras-vidal-nai-senior-member.jpg",
    imageAlt: "Dr. Contreras-Vidal elected as NAI Senior Member",
    content: `
Dr. José Luis Contreras-Vidal, Hugh Roy and Lillie Cranz Cullen University Professor of Electrical and Computer Engineering and director of the NSF IUCRC BRAIN Center, has been elected as a Senior Member of the National Academy of Inventors (NAI).

Read the full story on the UH website: https://www.uh.edu/news-events/stories/2026/february/02262026-nai-senior-members.php
    `,
  },
  {
    slug: "nsf-uh-fda-reu-site",
    title: "First NSF UH-FDA REU Site on Regulatory Science of Biomedical Devices",
    date: "2024-10-10",
    dateLabel: "Oct 10, 2024",
    summary:
      "The University of Houston has established the first NSF Research Experiences for Undergraduates site focused on regulatory science of biomedical devices, in partnership with the FDA.",
    href: "https://www.uh.edu/news-events/stories/2024/october/10102024-reu-site-brain-center-fda.php",
    imageSrc: "/news/nsf-uh-fda-reu-site.jpg",
    imageAlt: "NSF UH-FDA REU Site on Regulatory Science of Biomedical Devices",
    content: `
The University of Houston BRAIN Center has launched the first NSF-funded Research Experiences for Undergraduates (REU) site focused on the regulatory science of biomedical devices, in collaboration with the U.S. Food and Drug Administration.

Read the full story on the UH website: https://www.uh.edu/news-events/stories/2024/october/10102024-reu-site-brain-center-fda.php
    `,
  },
  {
    slug: "nsf-funds-two-more-universities",
    title: "NSF Funds Two More Universities to Join IUCRC BRAIN Center",
    date: "2023-10-09",
    dateLabel: "Oct 9, 2023",
    href: "https://www.uh.edu/news-events/stories/2023/august-2023/08232023-brain-center-expands-two-universities.php",
    summary:
      "The National Science Foundation has approved funding for West Virginia University and Georgia Institute of Technology to join the IUCRC BRAIN Center, expanding its national research network.",
    imageSrc: "/news/nsf-funds-two-more-universities.jpg",
    imageAlt:
      "Announcement graphic highlighting West Virginia University and Georgia Tech joining the BRAIN Center",
    content: `
The National Science Foundation has funded the addition of West Virginia University and the Georgia Institute of Technology to the IUCRC BRAIN Center.

This expansion broadens the Center's national footprint and brings new expertise in neurotechnology, clinical translation, and data-driven methods.

[Add more detail, institutional quotes, research focus, etc.]
    `,
  },
  {
    slug: "brain-center-annual-meeting-2025",
    title: "BRAIN Center Hosts 2025 Annual Industry–University Meeting",
    date: "2025-09-15",
    dateLabel: "Sep 15, 2025",
    summary:
      "Faculty, students, and industry partners gathered for the 2025 BRAIN Center Annual Meeting to review project progress, select new research, and plan workforce initiatives.",
    imageSrc: "/logos/brain.png",
    imageAlt: "Attendees networking and presenting posters at the BRAIN Center annual meeting",
    content: `
The 2025 BRAIN Center Annual Meeting brought together investigators, students, and industry members for two days of talks, posters, and project reviews.

Sessions highlighted new device prototypes, clinical studies, and big data tools emerging from the Center's four research thrusts.

[Add agenda, keynotes, outcomes, etc.]
    `,
  },
];

// Helper: newest first. Items with their own page link to it unless they set an external href.
export const sortedNewsItems: NewsItem[] = newsItems
  .map((item) => ({
    ...item,
    href: item.href ?? (item.page ? `/news/${item.slug}` : undefined),
    upcoming: isUpcoming(item),
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());