
import React from "react";

interface PageHeaderProps {
  eyebrow?: string; // Optional eyebrow label above title
  title: string;
  description?: React.ReactNode; // ReactNode allows passing strings or JSX (like bold text or links)
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-[var(--light-slate)] border-b border-slate-200">
      <div className="shell py-10 md:py-14">
        {eyebrow && (
          <span className="block text-xs font-bold uppercase tracking-widest text-[var(--deep-teal)] mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
          {title}
        </h1>
        {description && (
          <div className="mt-4 max-w-[65ch] text-sm sm:text-base text-slate-800 leading-relaxed">
            {description}
          </div>
        )}
      </div>
    </section>
  );
}