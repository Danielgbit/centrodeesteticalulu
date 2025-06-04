import products from "@/data/products";
import React from "react";
import ProductCard from "../components/ProductCard";
import Button from "@/components/Button";

const Featured = () => {
  return (
    <section>
      <div className="mb-12">
        <h2 className="text-title tracking-text text-light font-semibold mb-4">Productos destacados</h2>
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
          <Button text="Ver todos los productos"/>
        </a>
      </div>
    </section>
  );
};

export default Featured;
