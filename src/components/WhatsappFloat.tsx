export default function WhatsappFloat() {
    const phone = "54911xxxxxxxx";
    const text = encodeURIComponent("Hola Amelie, quiero hacer un pedido 😊");
    return (
      <a
        href={`https://wa.me/${phone}?text=${text}`}
        className="fixed bottom-6 right-6 rounded-full px-4 py-3 shadow-lg border bg-white hover:bg-black hover:text-white transition"
        aria-label="Abrir WhatsApp"
      >
        WhatsApp
      </a>
    );
  }
  