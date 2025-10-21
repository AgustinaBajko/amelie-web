import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./config";

const builder = imageUrlBuilder(sanityClient);

// Tipamos una fuente de imagen válida para Sanity (sin usar `any`)
type SanityImageSource =
  | string
  | { asset: { _ref: string } }
  | { _type: string; [key: string]: unknown };

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}


