"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/koleksiyonlar", label: "Koleksiyonlar" },
  { href: "/koleksiyonlar/summer-2024", label: "Summer 2024" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/basin", label: "Basında Biz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setOpen } = useCartStore();
  const itemCount = totalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-cream shadow-sm" : "bg-cream/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-heading text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-[#1A1A1A]">
                la VITA
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-muted font-sans mt-0.5">
                Design Atelier
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-[0.1em] uppercase text-[#1A1A1A] hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 hover:text-terracotta transition-colors hidden md:flex"
                aria-label="Arama"
              >
                <Search className="h-5 w-5" />
              </button>

              <button
                onClick={() => setOpen(true)}
                className="relative p-2 hover:text-terracotta transition-colors"
                aria-label="Sepet"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-terracotta text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 hover:text-terracotta transition-colors"
                aria-label="Menü"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-cream shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-lavita-border">
                <span className="font-heading text-lg tracking-widest uppercase">Menü</span>
                <button onClick={() => setMobileOpen(false)} className="p-1">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-[0.1em] uppercase text-[#1A1A1A] hover:text-terracotta transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 md:h-20" />
    </>
  );
}
