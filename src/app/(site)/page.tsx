import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <HeroCarousel />
      {/* Acá después agregamos los productos destacados */}
    </section>
  );
}
