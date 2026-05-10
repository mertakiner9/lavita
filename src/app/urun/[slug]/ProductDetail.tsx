"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";
import SizeSelector from "@/components/product/SizeSelector";
import SizeGuideModal from "@/components/product/SizeGuideModal";
import AddToCartButton from "@/components/product/AddToCartButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const selectedColor = product.colors[0] || "";

  return (
    <div className="flex flex-col">
      <Link
        href={`/koleksiyonlar/${product.collection}`}
        className="text-xs tracking-[0.2em] uppercase text-muted hover:text-terracotta transition-colors mb-3"
      >
        {product.collectionName}
      </Link>

      <h1 className="font-heading text-4xl md:text-5xl font-light leading-tight mb-4">
        {product.name}
      </h1>

      <p className="text-2xl font-medium mb-6">{formatPrice(product.price)}</p>

      {/* Colors */}
      {product.colors.length > 0 && (
        <div className="mb-6">
          <p className="text-xs tracking-[0.15em] uppercase text-muted mb-2">Renk</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color) => (
              <span
                key={color}
                className="text-sm px-3 py-1 border border-[#1A1A1A] bg-[#1A1A1A] text-white"
              >
                {color}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Size */}
      <div className="mb-2">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs tracking-[0.15em] uppercase text-muted">Beden</p>
          <SizeGuideModal />
        </div>
        <SizeSelector
          sizes={product.sizes}
          inStock={product.inStock}
          selected={selectedSize}
          onChange={setSelectedSize}
        />
        {!selectedSize && (
          <p className="text-xs text-muted mt-2">Lütfen bir beden seçin</p>
        )}
      </div>

      <div className="mt-6 mb-8">
        <AddToCartButton
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="desc">
          <AccordionTrigger className="text-xs tracking-[0.15em] uppercase">
            Ürün Açıklaması
          </AccordionTrigger>
          <AccordionContent>
            {product.description}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shipping">
          <AccordionTrigger className="text-xs tracking-[0.15em] uppercase">
            Kargo & İade
          </AccordionTrigger>
          <AccordionContent>
            Standart kargo 3–5 iş gününde teslim edilir. 500 ₺ ve üzeri alışverişlerde kargo ücretsizdir.
            Ürünleri teslim tarihinden itibaren 14 gün içinde iade edebilirsiniz. İadeler için
            WhatsApp veya e-posta üzerinden bizimle iletişime geçin.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="care">
          <AccordionTrigger className="text-xs tracking-[0.15em] uppercase">
            Bakım Talimatları
          </AccordionTrigger>
          <AccordionContent>
            Ürünleri 30°C&apos;de elde veya makinede nazik programda yıkayın. Direkt güneş ışığında
            kurutmayın. Gerekirse düşük ısıda ütüleyin. Kuru temizleme önerilmez.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
