import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-neutral-600">{description}</p>
      ) : null}
    </div>
  );
}
