import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import PeopleGrid from "@/app/components/PeopleGrid";
import { people } from "@/data/people";
import { getAllFacultyProfileSlugs } from "@/lib/faculty-profile";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Meet the BRAIN Center faculty driving neurotechnology research and innovation.",
  alternates: { canonical: "/organization/faculty" },
};

const facultyPeople = people
  .filter((p) => p.group.includes("Faculty"))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function FacultyPage() {
  const profileSlugs = new Set(getAllFacultyProfileSlugs());

  return (
    <div className="bg-white">
      <PageHeader eyebrow="Organization" title="Faculty" description="Researchers and investigators driving neurotechnology innovation across BRAIN Center sites." />
      <section className="shell py-12 md:py-16">
        <PeopleGrid people={facultyPeople} variant="faculty" profileSlugs={profileSlugs} />
      </section>
    </div>
  );
}
