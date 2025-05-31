import React from "react";

const CallToAction = () => {
    
  const whatsapp = "573001112233";
  const mensaje = encodeURIComponent(
    "Hola, quiero agendar una cita con Peluquería Bella."
  );

  return (
    <section className="bg-pink-600 text-white text-center py-12 px-4">
      <h2 className="text-3xl font-bold mb-4">¡Agenda tu cita hoy!</h2>
      <p className="mb-6 max-w-xl mx-auto">
        En Peluquería Bella estamos listas para cuidar de tu cabello y resaltar
        tu belleza.
      </p>
      <a
        href={`https://wa.me/${whatsapp}?text=${mensaje}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-pink-600 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100 transition"
      >
        Escríbenos por WhatsApp
      </a>
    </section>
  );
};

export default CallToAction;
