import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, collections, getProductsByCollection } from "@/lib/products";
import ProductGrid from "@/components/product/ProductGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const col = collections.find((c) => c.slug === slug);
  const title = col ? col.name : slug === "tumü" ? "Tüm Ürünler" : "Koleksiyon";
  return {
    title: `${title} — Lavita Design Atelier`,
    description: col?.description,
  };
}

export async function generateStaticParams() {
  return [...collections.map((c) => ({ slug: c.slug })), { slug: "tumü" }];
}

export default async function KoleksiyonDetailPage({ params }: Props) {
  const { slug } = await params;

  let colProducts = products;
  let title = "Tüm Ürünler";
  let description = "Tüm koleksiyonlardan seçkin parçalar";

  if (slug !== "tumü") {
    const col = collections.find((c) => c.slug === slug);
    if (!col) notFound();
    colProducts = getProductsByCollection(slug);
    title = col.name;
    description = col.description;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
          Koleksiyon · {colProducts.length} ürün
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-light">{title}</h1>
        {description && (
          <p className="text-muted mt-4 max-w-xl">{description}</p>
        )}
      </div>
      <ProductGrid products={colProducts} />
    </div>
  );
}
