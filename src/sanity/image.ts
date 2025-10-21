import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./config";

const builder = imageUrlBuilder(sanityClient);

// Evitamos 'any' usando 'unknown'
export function urlFor(source: unknown) {
  // El builder acepta múltiples formas; hacemos un cast seguro
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

