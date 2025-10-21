export type Producto = {
    _id: string;
    titulo: string;
    slug: string;
    categoria: "Tortas" | "Tartas" | "Alfajores" | "Petit Fours" | "Mesas Dulces" | "Temporada";
    precio: number;
    descripcion?: string;
    imagen?: unknown;      // antes: any
    etiquetas?: string[];
    porciones?: string;
    alergenos?: string;
  };
  
  
  