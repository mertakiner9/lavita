"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImagesProps {
  images: string[];
  productName: string;
}

export default function ProductImages({ images, productName }: ProductImagesProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
      {/* Thumbnails — left on desktop, bottom on mobile */}
      <div className="order-2 md:order-1 flex flex-row md:flex-col gap-2 md:w-20">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative aspect-square overflow-hidden flex-1 md:flex-none md:h-20 border-2 transition-colors ${
              selected === i ? "border-terracotta" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 md:order-2 flex-1 relative aspect-[3/4] overflow-hidden bg-[#F0EBE3]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[selected]}
              alt={productName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
