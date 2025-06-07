'use client'

import { easeInOut, motion } from "framer-motion";
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
    <motion.section id="testimonials" className="py-12 px-6"
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y:0}}  
      transition={{duration: 0.8, ease: easeInOut }}
      viewport={{once: false, amount: 0.5}}
    >
      <h2 className="text-title tracking-text text-light font-bold mb-20 text-center">
        Lo que dicen nuestras clientas
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card p-6 rounded-lg shadow">
            <p className="text-light font-normal italic text-sm">“{t.mensaje}”</p>
            <p className="mt-4 text-right font-semibold text-colorMedium">
              - {t.nombre}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
