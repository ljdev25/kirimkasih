import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white p-6 shadow-soft",
        className
      )}
      {...props}
    />
  );
}
