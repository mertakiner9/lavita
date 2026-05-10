"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import CartItem from "@/components/cart/CartItem";
import { Button } from "@/components/ui/button";

export default function SepetPage() {
  const { items, totalPrice, totalItems } = useCartStore();
  const count = totalItems();
  const total = totalPrice();

  if (count === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <ShoppingBag className="h-16 w-16 text-muted mx-auto mb-6" />
        <h1 className="font-heading text-4xl font-light mb-4">Sepetiniz Boş</h1>
        <p className="text-muted mb-8">Henüz sepetinize ürün eklemediniz.</p>
        <Button asChild>
          <Link href="/koleksiyonlar">Alışverişe Başla</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-4xl md:text-5xl font-light mb-10">
        Sepetim ({count} ürün)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={`${item.id}-${item.size}`} item={item} />
          ))}
        </div>

        <div className="bg-white border border-lavita-border p-6 h-fit sticky top-28">
          <h2 className="font-heading text-xl font-medium mb-6">Sipariş Özeti</h2>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted">Ara Toplam</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span className="text-muted">Kargo</span>
            <span>{total >= 500 ? <span className="text-green-600">Ücretsiz</span> : "99 ₺"}</span>
          </div>
          <div className="flex justify-between font-medium text-base border-t border-lavita-border pt-4 mb-6">
            <span>Toplam</span>
            <span>{formatPrice(total >= 500 ? total : total + 99)}</span>
          </div>
          <Button asChild className="w-full tracking-wider">
            <Link href="/odeme">Siparişi Tamamla</Link>
          </Button>
          <Button asChild variant="ghost" className="w-full mt-2">
            <Link href="/koleksiyonlar">Alışverişe Devam Et</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
