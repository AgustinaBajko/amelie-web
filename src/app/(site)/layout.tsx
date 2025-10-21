import React from "react";
import Link from "next/link";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl">Amelie</Link>
          <div className="flex gap-6 text-sm">
            <Link href="/menu">Menú</Link>
            <Link href="/eventos">Eventos</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>
      <WhatsappFloat />

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm opacity-80">
          © {new Date().getFullYear()} Amelie — Quilmes, Argentina
        </div>
      </footer>
    </div>
  );
}
