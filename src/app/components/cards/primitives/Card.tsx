import type { ElementType, ReactNode } from "react";

type BaseCardProps = {
  as?: ElementType;
  href?: string;
  external?: boolean;
  className?: string;
  /** Accessible name for image-only cards, whose content carries no text. */
  "aria-label"?: string;
  children: ReactNode;
};

function CardRoot({
  as = "article",
  href,
  external,
  className = "",
  "aria-label": ariaLabel,
  children,
}: BaseCardProps) {
  const Cmp: ElementType = (href ? "a" : as) as ElementType;
  const attrs = href
    ? {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <Cmp
      {...attrs}
      aria-label={ariaLabel}
      className={[
        "group block overflow-hidden rounded-2xl",
        "bg-transparent",
        "shadow-sm hover:shadow-md",
        "transition-all duration-150 focus:outline-none",
        // Teal, not --luminous-mint: cards sit on white/slate-50, where mint is
        // 1.48:1 and fails WCAG 1.4.11 (3:1 for non-text). Teal is 5.57:1.
        // Mint stays the focus colour on --midnight-blue surfaces (Header).
        "focus-visible:ring-2 focus-visible:ring-[var(--teal-ink)]",
        className,
      ].join(" ")}
    >
      {children}
    </Cmp>
  );
}

type MediaProps = {
  children: ReactNode;      // pass your <Image/> or <img/>
  ratio?: "16/9" | "4/3" | "3/4" | "1/1" | "4/5" | "5/6"; // defaults to 16/9
  className?: string;
};
function CardMedia({ children, ratio = "16/9", className = "" }: MediaProps) {
  const style = { aspectRatio: ratio.replace("/", " / ") };
  return (
    <div className={["relative w-full overflow-hidden", className].join(" ")} style={style}>
      {children}
    </div>
  );
}

type BodyProps = { children: ReactNode; className?: string };
function CardBody({ children, className = "" }: BodyProps) {
  return <div className={["p-4 bg-white text-[var(--midnight-blue)]", className].join(" ")}>{children}</div>;
}

type TextProps = { children: ReactNode; className?: string; as?: ElementType };
function CardTitle({ children, className = "", as: T = "h3" }: TextProps) {
  const TitleCmp = T as ElementType;
  return <TitleCmp className={["text-lg font-semibold", className].join(" ")}>{children}</TitleCmp>;
}
function CardMeta({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={["mt-1 text-sm text-[var(--midnight-blue)]/70", className].join(" ")}>{children}</p>;
}
function CardSummary({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={["mt-2 text-[var(--midnight-blue)]/80 line-clamp-2", className].join(" ")}>{children}</p>;
}

const Card = Object.assign(CardRoot, {
  Media: CardMedia,
  Body: CardBody,
  Title: CardTitle,
  Meta: CardMeta,
  Summary: CardSummary,
});

export default Card;