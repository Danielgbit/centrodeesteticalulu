'use client'

import Button from "@/components/Button";
import { easeInOut, motion } from "framer-motion";
import React from "react";

const CallToAction = () => {
    
  const whatsapp = "3148280265";
  const mensaje = encodeURIComponent(
    "Hola, quiero agendar una cita"
  );

  return (
    <motion.section 
      className="text-light text-center py-12 px-4 my-20"
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.8, ease: easeInOut}}
      viewport={{once: false, amount: 0.5}}
    >
      <h2 className="font-bold text-light mb-4 md:text-3xl text-[30px]">¡Agenda tu cita hoy!</h2>
      <p className="mb-6 px-8 max-w-xl mx-auto font-normal">
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
    </motion.section>
  );
};

export default CallToAction;
