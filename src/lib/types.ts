export type Producto = {
    _id: string;
    titulo: string;
    slug: string;
    categoria: "Tortas" | "Tartas" | "Alfajores" | "Petit Fours" | "Mesas Dulces" | "Temporada";
    precio: number;
    descripcion?: string;
    imagen?: any;    // Sanity image object
    etiquetas?: string[];
    porciones?: string;
    alergenos?: string;
  };
  
  