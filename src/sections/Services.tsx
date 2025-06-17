"use client";

import { easeInOut, motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeInOut }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="md:text-title text-[30px] font-bold sm:text-3xl text-light tracking-text mb-16 text-center">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-4xl mx-auto px-20">
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl tracking-text font-semibold mb-6 text-colorMedium uppercase">
            💅🏻 Uñas
          </h3>
          <ul className="space-y-3 list-disc list-inside text-xs sm:text-base font-normal text-light tracking-text">
            <li>Press On</li>
            <li>Semi permanente</li>
            <li>Tradicional</li>
            <li>Base Rubber</li>
            <li>Baño de base Rubber</li>
            <li>Acrílicas</li>
          </ul>
        </div>

        {/* Cabello */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl tracking-text font-semibold mb-6 text-colorMedium uppercase">
            💇‍♀️ Cabello
          </h3>
          <ul className="space-y-3 list-disc list-inside text-xs sm:text-base font-normal text-light tracking-text">
            <li>Enjuagues</li>
            <li>Tratamientos capilares</li>
            <li>Cepillados y alisado</li>
            <li>Keratinas sin formol</li>
            <li>Rayitos o rayos</li>
          </ul>
        </div>

        {/* Rostro y Belleza */}
        <div className="text-left">
          <h3 className="text-xl sm:text-2xl tracking-text font-semibold mb-6 text-colorMedium uppercase">
            ✨ Rostro & Belleza
          </h3>
          <ul className="space-y-3 list-disc list-inside text-xs sm:text-base font-normal text-light tracking-text">
            <li>Depilación de cejas</li>
            <li>Depilación de bozo</li>
            <li>Pestañas punto a punto</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
