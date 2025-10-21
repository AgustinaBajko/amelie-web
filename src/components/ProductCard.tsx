import Image from "next/image";
import { Producto } from "@/lib/types";
import { buildWhatsappLink } from "@/lib/useWhatsappMessage";
import { urlFor } from "@/sanity/image";

export default function ProductCard({ p }: { p: Producto }) {
  const wa = buildWhatsappLink("54911XXXXXXXX", p.titulo, 1);
  const imgUrl = p.imagen ? urlFor(p.imagen).width(800).height(600).fit("crop").url() : "/fallback.jpg";

  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-md transition">
      <div className="relative w-full h-48">
        <Image src={imgUrl} alt={p.titulo} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-xl">{p.titulo}</h3>
        {p.descripcion && <p className="text-sm opacity-80">{p.descripcion}</p>}
        <div className="mt-3 flex items-center justify-between">
          {typeof p.precio === "number" ? <span className="font-medium">${p.precio}</span> : <span />}
          <a href={wa} className="text-sm underline">Pedir</a>
        </div>
      </div>
    </div>
  );
}

