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
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Lo que dicen nuestras clientas
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-pink-100 p-6 rounded-lg shadow">
            <p className="text-gray-800 italic">“{t.mensaje}”</p>
            <p className="mt-4 text-right font-semibold text-pink-700">
              - {t.nombre}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
