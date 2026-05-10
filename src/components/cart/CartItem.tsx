"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import type { CartItem as CartItemType } from "@/lib/store";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-4 border-b border-lavita-border">
      <div className="relative w-20 h-28 flex-shrink-0 bg-[#F0EBE3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h4 className="font-heading text-base font-medium leading-tight">{item.name}</h4>
            <p className="text-xs text-muted mt-0.5">
              Beden: {item.size} · {item.color}
            </p>
          </div>
          <button
            onClick={() => removeItem(item.id, item.size)}
            className="text-muted hover:text-red-500 transition-colors flex-shrink-0 p-1"
            aria-label="Ürünü kaldır"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-lavita-border">
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-[#E8E3DC] transition-colors"
              aria-label="Azalt"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center hover:bg-[#E8E3DC] transition-colors"
              aria-label="Artır"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <p className="font-medium text-sm">{formatPrice(item.price * item.quantity)}</p>
        </div>
      </div>
    </div>
  );
}
