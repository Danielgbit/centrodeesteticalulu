import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <Image
        alt={product.name}
        src={product.image}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
      <p className="text-sm">{product.description}</p>
    </div>
  );
};

export default ProductCard;
