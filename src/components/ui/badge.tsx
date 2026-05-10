import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full text-xs font-medium",
        variant === "default" && "bg-terracotta text-white px-2 py-0.5",
        variant === "outline" && "border border-terracotta text-terracotta px-2 py-0.5",
        className
      )}
      {...props}
    />
  );
}
