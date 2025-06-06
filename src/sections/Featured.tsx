"use client";

import products from "@/data/products";
import React from "react";
import ProductCard from "../components/ProductCard";
import Button from "@/components/Button";
import { easeInOut, motion } from "framer-motion";

const Featured = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      className="pt-24"
    >
      <div className="mb-12">
        <h2 className="text-title tracking-text text-light font-semibold mb-4">
          Productos destacados
        </h2>
        <div className="flex aling-center justify-center flex-wrap gap-20 my-20">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="/products"
          className="inline-block mt-4 text-pink-600 font-semibold hover:underline"
        >
          <Button text="Ver todos los productos" />
        </a>
      </div>
    </motion.section>
  );
};

export default Featured;
