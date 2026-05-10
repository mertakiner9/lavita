import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CartDrawer from "@/components/cart/CartDrawer";
import { Toaster } from "sonner";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Lavita Design Atelier",
  description: "Butik kadın giyim, yaz koleksiyonları, Akdeniz/bohem estetik. Tescilli marka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
