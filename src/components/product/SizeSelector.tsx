"use client";

import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  inStock: Record<string, boolean>;
  selected: string;
  onChange: (size: string) => void;
}

export default function SizeSelector({
  sizes,
  inStock,
  selected,
  onChange,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const available = inStock[size] !== false;
        return (
          <button
            key={size}
            onClick={() => available && onChange(size)}
            disabled={!available}
            className={cn(
              "relative h-10 min-w-[44px] px-3 border text-sm font-medium transition-all",
              selected === size
                ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                : available
                ? "border-lavita-border hover:border-[#1A1A1A] bg-white text-[#1A1A1A]"
                : "border-lavita-border bg-white text-muted cursor-not-allowed"
            )}
          >
            {size}
            {!available && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="absolute w-full h-px bg-muted rotate-45 scale-x-125" />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
