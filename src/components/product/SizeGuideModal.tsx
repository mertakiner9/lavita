"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const sizeTable = [
  { size: "XS", bust: "80-84", waist: "62-66", hip: "86-90" },
  { size: "S", bust: "84-88", waist: "66-70", hip: "90-94" },
  { size: "M", bust: "88-92", waist: "70-74", hip: "94-98" },
  { size: "L", bust: "92-96", waist: "74-78", hip: "98-102" },
  { size: "XL", bust: "96-100", waist: "78-82", hip: "102-106" },
];

export default function SizeGuideModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-muted underline underline-offset-4 hover:text-terracotta transition-colors">
          Beden Rehberi
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Beden Rehberi</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted mb-4">
          Ölçüler santimetre (cm) cinsindendir. Doğru bedeni bulmak için vücut ölçülerinizi alın.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-lavita-border">
                <th className="text-left py-2 pr-4 font-medium text-[#1A1A1A]">Beden</th>
                <th className="text-left py-2 pr-4 font-medium text-[#1A1A1A]">Göğüs (cm)</th>
                <th className="text-left py-2 pr-4 font-medium text-[#1A1A1A]">Bel (cm)</th>
                <th className="text-left py-2 font-medium text-[#1A1A1A]">Kalça (cm)</th>
              </tr>
            </thead>
            <tbody>
              {sizeTable.map((row) => (
                <tr key={row.size} className="border-b border-lavita-border/50">
                  <td className="py-2 pr-4 font-medium">{row.size}</td>
                  <td className="py-2 pr-4 text-muted">{row.bust}</td>
                  <td className="py-2 pr-4 text-muted">{row.waist}</td>
                  <td className="py-2 text-muted">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-4">
          * İki beden arasındaysanız büyük bedeni seçmenizi öneririz.
        </p>
      </DialogContent>
    </Dialog>
  );
}
