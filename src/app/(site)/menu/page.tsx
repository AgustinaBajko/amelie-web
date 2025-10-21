import { sanityClient } from "@/sanity/config";
import { qProductos } from "@/sanity/queries";
import { Producto } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

export const revalidate = 60; // ISR: refresca cada 60s

export default async function MenuPage() {
  const productos = await sanityClient.fetch<Producto[]>(qProductos);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl mb-6">Menú</h1>

      {productos.length === 0 ? (
        <p className="opacity-70">Pronto cargaremos nuestros productos ✨</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productos.map((p) => <ProductCard key={p._id} p={p} />)}
        </div>
      )}
    </section>
  );
}

