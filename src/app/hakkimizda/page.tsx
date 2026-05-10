import type { Metadata } from "next";
import Image from "next/image";
import { Leaf, Scissors, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda — Lavita Design Atelier",
  description: "Lavita Design Atelier hikayesi, değerleri ve vizyonu.",
};

const values = [
  {
    icon: Scissors,
    title: "El İşçiliği",
    desc: "Her parça, deneyimli ustalar tarafından özenle dikilir ve detaylandırılır.",
  },
  {
    icon: Star,
    title: "Özgün Tasarım",
    desc: "Tescilli marka güvencesiyle, piyasada bir benzeri olmayan tasarımlar.",
  },
  {
    icon: Leaf,
    title: "Sürdürülebilir Kumaşlar",
    desc: "Doğal lifler ve çevre dostu üretim süreçleriyle moda anlayışımız.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-[50vh] flex items-end overflow-hidden">
        <Image
          src="https://picsum.photos/seed/aboutus/1600/900"
          alt="Hakkımızda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 p-12 text-white">
          <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-2">Bizi Tanıyın</p>
          <h1 className="font-heading text-5xl md:text-7xl font-light">Hakkımızda</h1>
        </div>
      </div>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Hikayemiz</p>
            <h2 className="font-heading text-4xl font-light mb-6 leading-tight">
              Akdeniz&apos;den Gelen Bir Rüya
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Lavita Design Atelier, Bodrum&apos;un dar sokaklarından, zeytinliklerin gölgesinden ve
              Ege&apos;nin masmavi sularından ilham alınarak 2021 yılında kuruldu.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              Her koleksiyon, Akdeniz&apos;in özgür ruhunu ve bohem estetiğini modern bir zarafetle
              buluşturuyor. Sınırlı sayıda üretilen her parça, sadece sizin için var.
            </p>
            <p className="text-muted leading-relaxed">
              Lavita Design Atelier, tescilli markasıyla özgün tasarımlar sunan, el işçiliğine
              saygı duyan ve sürdürülebilir moda anlayışını benimseyen bir butik atölye olarak
              büyümeye devam etmektedir.
            </p>
          </div>
          <div className="relative aspect-[3/4]">
            <Image
              src="https://picsum.photos/seed/aboutstory/600/800"
              alt="Atölye"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#F0EBE3] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="https://picsum.photos/seed/founderpic/600/600"
                alt="Founder & Designer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">
                Founder & Designer
              </p>
              <h2 className="font-heading text-4xl font-light mb-6 leading-tight">
                Tasarımın Arkasındaki Güç
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Moda tasarımı eğitiminin ardından Avrupa&apos;da birçok köklü markayla çalışan
                kurucumuz, kalbin sesini dinleyerek kendi atölyesini kurdu.
              </p>
              <p className="text-muted leading-relaxed">
                &ldquo;Her kadın, kendisini zarif ve özgür hissetmeyi hak ediyor. Ben sadece bu
                hissi kumaşa dönüştürüyorum.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-3">İlkelerimiz</p>
          <h2 className="font-heading text-4xl font-light">Değerlerimiz</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F0EBE3] flex items-center justify-center">
                  <Icon className="h-5 w-5 text-terracotta" />
                </div>
              </div>
              <h3 className="font-heading text-xl font-medium mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
