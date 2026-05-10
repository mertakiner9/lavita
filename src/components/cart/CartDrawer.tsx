"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const { items, isOpen, setOpen, totalItems, totalPrice } = useCartStore();
  const count = totalItems();
  const total = totalPrice();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-black/40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-lavita-border">
              <h2 className="font-heading text-xl font-medium tracking-wide">
                Sepetim ({count} ürün)
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-1 hover:text-terracotta transition-colors"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                  <ShoppingBag className="h-12 w-12 text-muted" />
                  <p className="font-heading text-xl text-muted">Sepetiniz boş</p>
                  <Button
                    variant="outline"
                    onClick={() => setOpen(false)}
                    asChild
                  >
                    <Link href="/koleksiyonlar">Alışverişe Başla</Link>
                  </Button>
                </div>
              ) : (
                <div>
                  {items.map((item) => (
                    <CartItem key={`${item.id}-${item.size}`} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-6 border-t border-lavita-border bg-cream space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted">Ara Toplam</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpen(false)}
                    asChild
                  >
                    <Link href="/koleksiyonlar">Alışverişe Devam Et</Link>
                  </Button>
                  <Button
                    className="w-full tracking-wider"
                    onClick={() => setOpen(false)}
                    asChild
                  >
                    <Link href="/odeme">Siparişi Tamamla</Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
