import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-brand-primary text-white font-bold shadow-xs rounded-full uppercase tracking-wider active:bg-brand-secondary cursor-pointer",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "border-2 border-brand-primary font-normal rounded-full uppercase tracking-wider hover:bg-brand-primary hover:text-white active:bg-brand-secondary active:border-brand-secondary cursor-pointer",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-[27px] md:h-10 py-2 md:py-6 px-6 has-[>svg]:px-4 text-sm md:text-base",
        sm: "h-[29px] px-6 py-2 has-[>svg]:px-4 text-sm",
        lg: "h-[42px] px-8 py-6 has-[>svg]:px-6 text-lg",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
