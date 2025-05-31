import ProductCard from "@/components/ProductCard"
import products from "@/data/products"

const page = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Nuestros productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div>
    </div>
  )
}

export default page
