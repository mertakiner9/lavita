import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Basında Biz — Lavita Design Atelier",
  description: "Lavita Design Atelier hakkında basın haberleri ve röportajlar.",
};

const pressItems = [
  {
    publication: "Vogue TR",
    date: "Haziran 2024",
    title: "Yaz koleksiyonunun en çarpıcı tasarımları: Lavita Design Atelier",
    description: "Akdeniz estetiğini modern zarafetle buluşturan butik marka Lavita, bu yazın konuşulan adlarından biri olmayı başardı.",
  },
  {
    publication: "Elle",
    date: "Mayıs 2024",
    title: "Bohem ruhun tescilli hali: Lavita Design Atelier ile söyleşi",
    description: "Founder ve designer, markasının kuruluş hikayesini ve ilham kaynaklarını Elle okuyucularıyla paylaştı.",
  },
  {
    publication: "Harper's Bazaar",
    date: "Nisan 2024",
    title: "Sürdürülebilir modanın güzeli: 2024 yazına damga vuracak 10 marka",
    description: "Lavita Design Atelier, doğal kumaşları ve el işçiliğiyle sürdürülebilir moda listesinde yerini aldı.",
  },
  {
    publication: "Cosmopolitan TR",
    date: "Mart 2024",
    title: "Tatil bavulunuza ekleyin: Yaz sezonu için butik öneriler",
    description: "Tatil gardırobunuzu renklendirmeye hazır butik markalar arasında Lavita Design Atelier öne çıkıyor.",
  },
  {
    publication: "InStyle TR",
    date: "Ocak 2024",
    title: "2024 yaz trendlerini belirleyecek Türk tasarımcılar",
    description: "Yeni yıla heyecanla giren yerli tasarımcılar arasında Lavita Design Atelier en ilgi çekici koleksiyonla dikkat çekiyor.",
  },
  {
    publication: "Hürriyet Pazar",
    date: "Aralık 2023",
    title: "Giyimde yerli ve özgün: Tescilli markaların yükselişi",
    description: "Türkiye'de tescilli marka olarak faaliyet gösteren butik tasarım atölyelerinin başarı hikayeleri.",
  },
];

export default function BasinPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Medya</p>
        <h1 className="font-heading text-5xl md:text-6xl font-light">Basında Biz</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pressItems.map((item, i) => (
          <article
            key={i}
            className="border border-lavita-border p-6 hover:border-terracotta transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-heading text-xl font-medium">{item.publication}</p>
                <p className="text-xs text-muted mt-0.5">{item.date}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-terracotta transition-colors flex-shrink-0 mt-1" />
            </div>
            <h2 className="font-medium text-sm mb-3 leading-snug">{item.title}</h2>
            <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            <button className="mt-4 text-xs tracking-[0.15em] uppercase text-terracotta hover:underline">
              Haberi Oku
            </button>
          </article>
        ))}
      </div>

      {/* Press Contact */}
      <div className="mt-16 text-center p-12 bg-[#F0EBE3]">
        <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Basın İletişim</p>
        <h2 className="font-heading text-3xl font-light mb-4">Basın Ekibimizle İletişime Geçin</h2>
        <p className="text-muted mb-6">
          Röportaj, fotoğraf ve ürün talepleri için:
        </p>
        <a
          href="mailto:press@lavitatasarimatolyesi.com"
          className="text-terracotta font-medium hover:underline"
        >
          press@lavitatasarimatolyesi.com
        </a>
      </div>
    </div>
  );
}
