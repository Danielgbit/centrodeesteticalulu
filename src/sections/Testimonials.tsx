import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      nombre: "Laura P.",
      mensaje:
        "¡Me encantó mi nuevo look! Excelente atención y productos de calidad.",
    },
    {
      nombre: "Andrea G.",
      mensaje:
        "Muy profesionales. Mis uñas quedaron hermosas y duraron bastante.",
    },
    {
      nombre: "Valentina R.",
      mensaje: "La mejor peluquería de la zona, súper recomendada.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-title tracking-text text-light font-bold mb-20 text-center">
        Lo que dicen nuestras clientas
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card p-6 rounded-lg shadow">
            <p className="text-light italic text-sm">“{t.mensaje}”</p>
            <p className="mt-4 text-right font-semibold text-light">
              - {t.nombre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
