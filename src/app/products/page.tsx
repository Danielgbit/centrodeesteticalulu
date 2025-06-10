import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductosPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 my-30">
      <h1 className="text-title tracking-text font-bold text-center text-light mb-20">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center my-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductosPage;
