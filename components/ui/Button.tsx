import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline";

const buttonStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-neutral-900 hover:bg-primary-600 shadow-soft",
  secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-soft",
  outline:
    "bg-transparent text-secondary-700 border border-secondary-300 hover:bg-secondary-50",
};

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: undefined;
}

interface ButtonAsLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ variant = "primary", className, href, ...props }, ref) => {
  const classes = cn(buttonStyles, variantStyles[variant], className);

  if (href !== undefined) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});

Button.displayName = "Button";
