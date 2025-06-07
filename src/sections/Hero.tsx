'use client'

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className="pt-24"
    >
      <h1 className="my-20 tracking-text text-light text-4xl font-bold mb-4">
        Bienvenidos a Lulú
      </h1>
      <p className="text-light my-10 text-base max-w-xl mx-auto">
        Expertos en belleza y cuidado capilar. Mira nuestros productos y
        contáctanos para una cita.
      </p>
    </motion.section>
  );
};

export default Hero;
