import Button from "@/components/Button";
import React from "react";

const CallToAction = () => {
    
  const whatsapp = "573001112233";
  const mensaje = encodeURIComponent(
    "Hola, quiero agendar una cita con Peluquería Bella."
  );

  return (
    <section className="text-light text-center py-12 px-4 my-20">
      <h2 className="text-3xl font-bold mb-4">¡Agenda tu cita hoy!</h2>
      <p className="mb-6 max-w-xl mx-auto">
        En Peluquería Bella estamos listas para cuidar de tu cabello y resaltar
        tu belleza.
      </p>
      <a
        href={`https://wa.me/${whatsapp}?text=${mensaje}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text="Escribenos por whatsapp"/>
      </a>
    </section>
  );
};

export default CallToAction;
