// Agregá arriba de todo o cerca de Producto:
export type SanityImage = {
    asset?: { _ref?: string; _type?: string };
    // permitimos props adicionales sin `any`
    [key: string]: unknown;
  };
  
  export type Producto = {
    _id: string;
    titulo: string;
    slug: string;
    categoria:
      | "Tortas"
      | "Tartas"
      | "Alfajores"
      | "Petit Fours"
      | "Mesas Dulces"
      | "Temporada";
    precio: number;
    descripcion?: string;
    imagen?: SanityImage;   // <-- antes era any
    etiquetas?: string[];
    porciones?: string;
    alergenos?: string;
  };
  
  
  
  