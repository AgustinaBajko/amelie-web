import { sanityClient } from "@/sanity/config";
import { qServicios } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

// Reutilizamos el mismo tipo simple de imagen
type SanityImage = {
  asset?: { _ref?: string; _type?: string };
  [key: string]: unknown;
};

export const revalidate = 60;

type Servicio = {
  _id: string;
  titulo: string;
  descripcion?: string;
  incluye?: string[];
  precio_desde?: number;
  imagen?: SanityImage;   // <-- antes era any
};

export default async function EventosPage() {
  const servicios = await sanityClient.fetch<Servicio[]>(qServicios);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="font-serif text-3xl">Eventos & Catering</h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {servicios.map((s) => (
          <div key={s._id} className="rounded-2xl overflow-hidden bg-white shadow">
            {s.imagen && (
              <div className="relative w-full h-48">
                <Image
                  alt={s.titulo}
                  src={urlFor(s.imagen).width(900).height(600).fit("crop").url()}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4 space-y-2">
              <h3 className="font-serif text-xl">{s.titulo}</h3>
              {s.descripcion && <p className="text-sm opacity-80">{s.descripcion}</p>}
              {s.incluye?.length ? (
                <ul className="text-sm list-disc pl-5 opacity-80">
                  {s.incluye.map((i, idx) => (
                    <li key={idx}>{i}</li>
                  ))}
                </ul>
              ) : null}
              {typeof s.precio_desde === "number" && (
                <p className="text-sm">Desde ${s.precio_desde}</p>
              )}
              <a
                href={`https://wa.me/54911XXXXXXXX?text=${encodeURIComponent(
                  `Hola Amelie, quiero info de: ${s.titulo}`
                )}`}
                className="inline-block mt-2 text-sm underline"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
