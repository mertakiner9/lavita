"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link href={`/urun/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F0EBE3] mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Second image on hover */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white text-[#1A1A1A] text-xs tracking-[0.15em] uppercase px-6 py-2">
              Detayları Gör
            </span>
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.15em] uppercase text-muted mb-1">
            {product.collectionName}
          </p>
          <h3 className="font-heading text-lg font-medium text-[#1A1A1A] mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-[#1A1A1A]">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </motion.div>
  );
}
