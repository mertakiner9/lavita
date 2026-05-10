import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/products";

export const metadata: Metadata = {
  title: "Koleksiyonlar — Lavita Design Atelier",
  description: "Lavita Design Atelier tüm koleksiyonları.",
};

export default function KoleksiyonlarPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Keşfet</p>
        <h1 className="font-heading text-5xl md:text-6xl font-light">Koleksiyonlar</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* All products */}
        <Link
          href="/koleksiyonlar/tumü"
          className="group relative aspect-[4/3] overflow-hidden block"
        >
          <Image
            src="https://picsum.photos/seed/allcol/800/600"
            alt="Tüm Ürünler"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
              {collections.reduce((sum, c) => sum + c.productCount, 0)} ürün
            </p>
            <h2 className="font-heading text-4xl font-light">Tüm Ürünler</h2>
          </div>
        </Link>

        {collections.map((col) => (
          <Link
            key={col.slug}
            href={`/koleksiyonlar/${col.slug}`}
            className="group relative aspect-[4/3] overflow-hidden block"
          >
            <Image
              src={col.image}
              alt={col.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
              <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2">
                {col.productCount} ürün
              </p>
              <h2 className="font-heading text-4xl font-light">{col.name}</h2>
              <p className="text-sm text-white/80 mt-2">{col.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
