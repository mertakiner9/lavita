export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  collection: string;
  collectionName: string;
  sizes: string[];
  colors: string[];
  description: string;
  images: string[];
  inStock: Record<string, boolean>;
}

export const products: Product[] = [
  {
    id: "zoe-set",
    slug: "zoe-set",
    name: "Zoe Crop Top & Etek Set",
    price: 2850,
    collection: "summer-2024",
    collectionName: "Summer 2024",
    sizes: ["S", "M", "L"],
    colors: ["Kırmızı-Pembe"],
    description:
      "El yapımı şifon kumaştan üretilmiş, büyük gül baskılı crop top ve asimetrik maxi etek seti. Akdeniz ruhunu taşıyan bu özel set, yaz gecelerinin vazgeçilmezi olacak.",
    images: [
      "https://picsum.photos/seed/zoe1/600/800",
      "https://picsum.photos/seed/zoe2/600/800",
      "https://picsum.photos/seed/zoe3/600/800",
    ],
    inStock: { S: true, M: true, L: false },
  },
  {
    id: "mavi-leopar-maxi",
    slug: "mavi-leopar-maxi",
    name: "Mavi Leopar Maxi Elbise",
    price: 3200,
    collection: "summer-2024",
    collectionName: "Summer 2024",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Mavi"],
    description:
      "Kobalt mavi leopar desenli, fırfırlı asimetrik kesim maxi elbise. Özgün tasarımı ve akışkan kumaşıyla her ortamda fark yaratır.",
    images: [
      "https://picsum.photos/seed/leopar1/600/800",
      "https://picsum.photos/seed/leopar2/600/800",
      "https://picsum.photos/seed/leopar3/600/800",
    ],
    inStock: { XS: true, S: true, M: true, L: true },
  },
  {
    id: "siyah-beyaz-v-yaka",
    slug: "siyah-beyaz-v-yaka",
    name: "Siyah Beyaz Derin V Elbise",
    price: 2650,
    collection: "summer-2024",
    collectionName: "Summer 2024",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Siyah-Beyaz"],
    description:
      "Geometrik etnik desenli, derin V yakalı, bağcıklı askılı maxi elbise. Zamansız siyah-beyaz kombinasyonu ile her mevsim kullanılabilir.",
    images: [
      "https://picsum.photos/seed/siyahbeyaz1/600/800",
      "https://picsum.photos/seed/siyahbeyaz2/600/800",
      "https://picsum.photos/seed/siyahbeyaz3/600/800",
    ],
    inStock: { S: true, M: true, L: true, XL: false },
  },
  {
    id: "terracotta-keten-maxi",
    slug: "terracotta-keten-maxi",
    name: "Terracotta Keten Maxi Elbise",
    price: 2400,
    collection: "summer-2023",
    collectionName: "Summer 2023",
    sizes: ["S", "M", "L"],
    colors: ["Terracotta"],
    description:
      "%100 keten, sırt bağcıklı, hafif ve nefes alan yazlık maxi elbise. Doğal keten dokusu ile sürdürülebilir moda anlayışını yansıtır.",
    images: [
      "https://picsum.photos/seed/terra1/600/800",
      "https://picsum.photos/seed/terra2/600/800",
      "https://picsum.photos/seed/terra3/600/800",
    ],
    inStock: { S: true, M: false, L: true },
  },
  {
    id: "kahve-midi-elbise",
    slug: "kahve-midi-elbise",
    name: "Kahverengi Askılı Midi Elbise",
    price: 1950,
    collection: "summer-2023",
    collectionName: "Summer 2023",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Kahverengi"],
    description:
      "Saten dokulu, ince askılı, midi boy zarif elbise. Akşam yemeklerinden gün içi davetlere her ortama uygun şık bir seçenek.",
    images: [
      "https://picsum.photos/seed/kahve1/600/800",
      "https://picsum.photos/seed/kahve2/600/800",
      "https://picsum.photos/seed/kahve3/600/800",
    ],
    inStock: { XS: true, S: true, M: true, L: true },
  },
  {
    id: "floral-bikini-set",
    slug: "floral-bikini-set",
    name: "Floral Bikini Set",
    price: 1650,
    collection: "summer-2024",
    collectionName: "Summer 2024",
    sizes: ["S", "M", "L"],
    colors: ["Çok Renkli"],
    description:
      "Tropikal çiçek baskılı, bağcıklı üst ve alt bikini seti. Canlı renkleri ve özgün deseniyle sahil sezonunun favorisi.",
    images: [
      "https://picsum.photos/seed/floral1/600/800",
      "https://picsum.photos/seed/floral2/600/800",
      "https://picsum.photos/seed/floral3/600/800",
    ],
    inStock: { S: true, M: true, L: false },
  },
  {
    id: "bordo-yazlik-elbise",
    slug: "bordo-yazlik-elbise",
    name: "Bordo Yazlık Maxi Elbise",
    price: 2750,
    collection: "summer-2024",
    collectionName: "Summer 2024",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Bordo"],
    description:
      "Akışkan şifon kumaş, fırfırlı etek ucu, Akdeniz ruhu taşıyan şık bir yaz elbisesi. Zengin bordo tonu ile her tenle uyumlu.",
    images: [
      "https://picsum.photos/seed/bordo1/600/800",
      "https://picsum.photos/seed/bordo2/600/800",
      "https://picsum.photos/seed/bordo3/600/800",
    ],
    inStock: { XS: true, S: true, M: true, L: true, XL: true },
  },
  {
    id: "beyaz-nakisli-elbise",
    slug: "beyaz-nakisli-elbise",
    name: "Beyaz Nakışlı Elbise",
    price: 3100,
    collection: "summer-2023",
    collectionName: "Summer 2023",
    sizes: ["S", "M", "L"],
    colors: ["Beyaz"],
    description:
      "El nakışı detaylı, pamuklu beyaz maxi elbise. Geleneksel motiflerle modern kesim bir araya gelince ortaya çıkan eşsiz bir tasarım.",
    images: [
      "https://picsum.photos/seed/beyaz1/600/800",
      "https://picsum.photos/seed/beyaz2/600/800",
      "https://picsum.photos/seed/beyaz3/600/800",
    ],
    inStock: { S: false, M: true, L: true },
  },
];

export const collections = [
  {
    slug: "summer-2024",
    name: "Summer 2024",
    description: "Akdeniz esintisi, bohem ruh",
    image: "https://picsum.photos/seed/summer2024/800/600",
    productCount: products.filter((p) => p.collection === "summer-2024").length,
  },
  {
    slug: "summer-2023",
    name: "Summer 2023",
    description: "Geçmiş koleksiyondan seçkin parçalar",
    image: "https://picsum.photos/seed/summer2023/800/600",
    productCount: products.filter((p) => p.collection === "summer-2023").length,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: string): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.collection === product.collection)
    .slice(0, limit);
}
