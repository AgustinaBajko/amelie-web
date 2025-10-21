import { createClient } from "next-sanity";

export const projectId = process.env.SANITY_PROJECT_ID!;
export const dataset = process.env.SANITY_DATASET!;
export const apiVersion = process.env.SANITY_API_VERSION!;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // cache CDN para lecturas rápidas
});
