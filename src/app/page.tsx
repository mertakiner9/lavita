import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Lavita Design Atelier",
  description: "Butik kadın giyim, yaz koleksiyonları, Akdeniz/bohem estetik.",
};

const newArrivals = products.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/lavitahero/1600/900"
          alt="Lavita Design Atelier"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xs tracking-[0.4em] uppercase mb-4 text-white/80">
            Summer 2024
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-8">
            Yeni Koleksiyon
          </h1>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#1A1A1A] tracking-[0.2em] uppercase"
          >
            <Link href="/koleksiyonlar/summer-2024">Keşfet</Link>
          </Button>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-[#F0EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
              <Image
                src="https://picsum.photos/seed/summer24feat/800/600"
                alt="Summer 2024"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-16 bg-[#E8E3DC]">
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Öne Çıkan</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 leading-tight">
                Summer 2024 Koleksiyonu
              </h2>
              <p className="text-muted leading-relaxed mb-8 max-w-sm">
                Akdeniz&apos;in sıcaklığından ilham alan, el işçiliğiyle hayat bulan özel
                tasarımlar. Her parçada bir hikaye, her dikişte bir sevgi.
              </p>
              <Link
                href="/koleksiyonlar/summer-2024"
                className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-terracotta transition-colors group"
              >
                Koleksiyonu İncele
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Yeni Gelenler</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light">Seçkin Parçalar</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/koleksiyonlar">Tüm Ürünleri Gör</Link>
          </Button>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-[#F0EBE3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Hikayemiz</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 leading-tight">
                Founder & Designer
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Lavita Design Atelier, Akdeniz kıyılarından ilham alarak doğdu. Her parça, el
                işçiliğinin nezaketini ve özgün tasarımın gücünü bir araya getiriyor.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Tescilli markamızla sunduğumuz her tasarım; sürdürülebilir kumaşlar, el nakışları
                ve sınırlı üretimle şekilleniyor. Çünkü gerçek lüks, özgünlüktedir.
              </p>
              <Link
                href="/hakkimizda"
                className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-[#1A1A1A] hover:text-terracotta transition-colors group"
              >
                Daha Fazla
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://picsum.photos/seed/lavitafounder/600/750"
                alt="Founder & Designer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">Instagram</p>
          <a
            href="https://instagram.com/lavitadesignatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-3xl font-light hover:text-terracotta transition-colors"
          >
            @lavitadesignatelier
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
          {[11, 22, 33, 44, 55, 66].map((seed) => (
            <a
              key={seed}
              href="https://instagram.com/lavitadesignatelier"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={`https://picsum.photos/seed/ig${seed}/300/300`}
                alt={`Instagram görseli`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </section>

      {/* Press */}
      <section className="py-16 border-t border-lavita-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-muted">Basında Biz</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40">
            {["Vogue TR", "Elle", "Harper's Bazaar", "Cosmopolitan", "InStyle"].map((name) => (
              <span key={name} className="font-heading text-xl font-light tracking-wider">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
