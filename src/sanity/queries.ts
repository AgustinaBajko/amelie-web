// Productos (para /menu)
export const qProductos = /* groq */ `
*[_type == "producto"] | order(_createdAt desc){
  _id,
  titulo,
  "slug": slug.current,
  categoria,
  precio,
  descripcion,
  etiquetas,
  porciones,
  alergenos,
  imagen
}
`;

// Servicios de eventos (para /eventos)
export const qServicios = /* groq */ `
*[_type == "servicioEvento"] | order(_createdAt desc){
  _id,
  titulo,
  descripcion,
  incluye,
  precio_desde,
  imagen
}
`;

// Testimonios (para Home)
export const qTestimonios = /* groq */ `
*[_type == "testimonio"] | order(_createdAt desc){
  _id,
  nombre,
  texto,
  rating
}
`;
