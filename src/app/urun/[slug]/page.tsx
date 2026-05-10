import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import ProductImages from "@/components/product/ProductImages";
import ProductDetail from "./ProductDetail";
import ProductGrid from "@/components/product/ProductGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return {
    title: `${product.name} — Lavita Design Atelier`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function UrunPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted mb-8 tracking-wide">
        <Link href="/" className="hover:text-terracotta transition-colors">Ana Sayfa</Link>
        <span>/</span>
        <Link href="/koleksiyonlar" className="hover:text-terracotta transition-colors">Koleksiyonlar</Link>
        <span>/</span>
        <Link href={`/koleksiyonlar/${product.collection}`} className="hover:text-terracotta transition-colors">
          {product.collectionName}
        </Link>
        <span>/</span>
        <span className="text-[#1A1A1A]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Images */}
        <ProductImages images={product.images} productName={product.name} />

        {/* Details */}
        <ProductDetail product={product} />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section>
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">Öneriler</p>
            <h2 className="font-heading text-3xl font-light">Bunları da Beğenebilirsin</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
