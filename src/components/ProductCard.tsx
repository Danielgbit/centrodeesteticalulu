const ProductCard = ({product} : {product: Product}) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
      <p className="text-sm">{product.description}</p>
    </div>
  )
}

export default ProductCard
