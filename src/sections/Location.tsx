"use client";

import { easeInOut, motion } from "framer-motion";
import React from "react";

const LocationSection = () => {
  return (
    <motion.section
      className="py-20 px-6 bg-dark"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeInOut }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="md:text-title text-[30px] font-bold text-light tracking-text mb-20 text-center">
        Dónde estamos y horarios
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold tracking-text mb-5 text-colorMedium">Dirección</h3>
          <p className="mb-4 text-shadow font-normal tracking-text text-sm tracking-text">
            Calle 78 C-Sur #46-101 - <strong>Sabaneta - Prados de sabaneta</strong>
          </p>

          <h3 className="text-xl text-colorMedium font-bold tracking-text mb-5">Horarios</h3>
          <ul className="text-shadow text-sm font-normal space-y-2 tracking-text">
            <li>Lunes a Viernes: 10:00 AM – 7:30 PM</li>
            <li>Sábados: 10:00 AM – 7:30 PM</li>
            <li>Domingos: Cerrado</li>
            <li>Festivos: Cerrado</li>
          </ul>
        </div>

        <div className="w-full h-64 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8776842243265!2d-75.6255729264984!3d6.14712592742573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4681607a0bf0e3%3A0x693c3a6c1e15d9b6!2sCentro%20De%20Estetica%20Lulu!5e0!3m2!1ses-419!2sco!4v1749151542944!5m2!1ses-419!2sco" // Pega aquí tu enlace real de Google Maps
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationSection;
