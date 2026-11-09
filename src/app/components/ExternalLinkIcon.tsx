// Small arrow shown on links that open in a new tab. Pair it with ExternalLinkNote for screen readers.
export function ExternalLinkIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export function ExternalLinkNote() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}
