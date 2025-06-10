"use client";

import products from "@/data/products";
import React from "react";
import ProductCard from "../components/ProductCard";
import Button from "@/components/Button";
import { easeInOut, motion } from "framer-motion";

const Featured = () => {
  return (
<motion.section
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: easeInOut }}
  viewport={{ once: false, amount: 0.1 }}
  className="pt-24 px-4 my-20"
>
  <div className="mb-12 text-center">
    <h2 className="text-[30px] md:text-title tracking-text text-light font-semibold mb-4">
      Productos destacados
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center my-20">
    {products.slice(0, 3).map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>

  <div className="text-center mt-8">
    <a
      href="/products"
      className="inline-block text-pink-600 font-semibold hover:underline"
    >
      <Button text="Ver todos los productos" />
    </a>
  </div>
</motion.section>

  );
};

export default Featured;
