"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCartStore } from "@/lib/store";
import { generateOrderNumber } from "@/lib/utils";

const CITIES = [
  "Adana","Adıyaman","Afyonkarahisar","Ağrı","Amasya","Ankara","Antalya","Artvin","Aydın","Balıkesir",
  "Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli",
  "Diyarbakır","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane",
  "Hakkari","Hatay","Isparta","Mersin","İstanbul","İzmir","Kars","Kastamonu","Kayseri","Kırklareli",
  "Kırşehir","Kocaeli","Konya","Kütahya","Malatya","Manisa","Kahramanmaraş","Mardin","Muğla","Muş",
  "Nevşehir","Niğde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Tekirdağ","Tokat",
  "Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozgat","Zonguldak","Aksaray","Bayburt","Karaman",
  "Kırıkkale","Batman","Şırnak","Bartın","Ardahan","Iğdır","Yalova","Karabük","Kilis","Osmaniye","Düzce",
];

export default function CheckoutForm() {
  const router = useRouter();
  const { clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    city: "", district: "", address: "", zip: "",
    cardNumber: "", cardName: "", cardExpiry: "", cardCvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const orderNumber = generateOrderNumber();
    await new Promise((r) => setTimeout(r, 1200));
    clearCart();
    router.push(`/siparis-tamamlandi?order=${orderNumber}&email=${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact */}
      <section>
        <h2 className="font-heading text-xl font-medium mb-5">İletişim Bilgileri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="firstName">Ad</Label>
            <Input id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="Adınız" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName">Soyad</Label>
            <Input id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Soyadınız" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">E-posta</Label>
            <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="ornek@email.com" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+90 5XX XXX XX XX" />
          </div>
        </div>
      </section>

      {/* Address */}
      <section>
        <h2 className="font-heading text-xl font-medium mb-5">Teslimat Adresi</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>İl</Label>
              <Select onValueChange={(v) => setForm((p) => ({ ...p, city: v }))}>
                <SelectTrigger>
                  <SelectValue placeholder="İl seçin" />
                </SelectTrigger>
                <SelectContent>
                  {CITIES.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="district">İlçe</Label>
              <Input id="district" name="district" required value={form.district} onChange={handleChange} placeholder="İlçe" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="address">Adres</Label>
            <Input id="address" name="address" required value={form.address} onChange={handleChange} placeholder="Mahalle, sokak, bina no, daire..." />
          </div>
          <div className="w-40 space-y-1.5">
            <Label htmlFor="zip">Posta Kodu</Label>
            <Input id="zip" name="zip" required value={form.zip} onChange={handleChange} placeholder="34000" />
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section>
        <h2 className="font-heading text-xl font-medium mb-5">Kargo</h2>
        <div className="border border-lavita-border p-4 flex justify-between items-center">
          <div>
            <p className="font-medium text-sm">Standart Kargo</p>
            <p className="text-xs text-muted mt-0.5">3–5 iş günü</p>
          </div>
          <p className="text-sm font-medium text-terracotta">99 ₺ (500 ₺ üzeri ücretsiz)</p>
        </div>
      </section>

      {/* Payment */}
      <section>
        <h2 className="font-heading text-xl font-medium mb-5">Ödeme Bilgileri</h2>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="cardNumber">Kart Numarası</Label>
            <Input id="cardNumber" name="cardNumber" required value={form.cardNumber} onChange={handleChange} placeholder="**** **** **** ****" maxLength={19} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cardName">Kart Üzerindeki İsim</Label>
            <Input id="cardName" name="cardName" required value={form.cardName} onChange={handleChange} placeholder="AD SOYAD" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cardExpiry">Son Kullanma Tarihi</Label>
              <Input id="cardExpiry" name="cardExpiry" required value={form.cardExpiry} onChange={handleChange} placeholder="AA/YY" maxLength={5} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cardCvv">CVV</Label>
              <Input id="cardCvv" name="cardCvv" required value={form.cardCvv} onChange={handleChange} placeholder="***" maxLength={4} type="password" />
            </div>
          </div>
          <p className="text-xs text-muted">* Bu demo bir ödeme formudur. Gerçek ödeme işlemi yapılmaz.</p>
        </div>
      </section>

      <Button type="submit" size="lg" className="w-full tracking-wider" disabled={loading}>
        {loading ? "Sipariş Oluşturuluyor..." : "Siparişi Onayla"}
      </Button>
    </form>
  );
}
