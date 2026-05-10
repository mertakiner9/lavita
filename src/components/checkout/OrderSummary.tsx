"use client";

import Image from "next/image";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

const SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 99;

export default function OrderSummary() {
  const { items, totalPrice } = useCartStore();
  const subtotal = totalPrice();
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  return (
    <div className="bg-white border border-lavita-border p-6 sticky top-28">
      <h2 className="font-heading text-xl font-medium mb-6">Sipariş Özeti</h2>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={`${item.id}-${item.size}`} className="flex gap-3">
            <div className="relative w-16 h-20 flex-shrink-0 bg-[#F0EBE3] overflow-hidden">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
              <span className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium leading-tight">{item.name}</p>
              <p className="text-xs text-muted mt-0.5">Beden: {item.size}</p>
              <p className="text-sm mt-1">{formatPrice(item.price * item.quantity)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-lavita-border pt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted">Ara Toplam</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted">Kargo</span>
          <span>
            {shipping === 0 ? (
              <span className="text-green-600">Ücretsiz</span>
            ) : (
              formatPrice(SHIPPING_COST)
            )}
          </span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-terracotta">
            {formatPrice(SHIPPING_THRESHOLD - subtotal)} daha harcayın, ücretsiz kargo kazanın!
          </p>
        )}
        <div className="flex justify-between font-medium text-base pt-2 border-t border-lavita-border">
          <span>Toplam</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
    </div>
  );
}
