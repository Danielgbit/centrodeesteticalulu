'use client'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className="pt-24 my-20"
    >
      <h1 className="my-20 tracking-text text-colorMedium md:text-4xl text-[30px] font-bold mb-4">
        Bienvenidos a Lulú
      </h1>
      <p className="text-light my-10 px-8 font-normal text-sm max-w-xl md:text-base mx-auto">
        Expertos en belleza y cuidado capilar. Mira nuestros productos y
        contáctanos para una cita.
      </p>
    </motion.section>
  );
};

export default Hero;
