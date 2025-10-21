export function buildWhatsappLink(phone: string, producto: string, cantidad = 1) {
    const text = `Hola Amelie, quiero ${producto} x${cantidad}. ¿Tienen disponibilidad?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }
  