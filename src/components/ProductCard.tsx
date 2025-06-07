import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-card rounded-lg shadow">
      <Image
        alt={product.name}
        src={product.image}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded"
      />
      <div className="py-2">
        <h3 className="text-light text-center tracking-text mt-2 text-xl font-bold">{product.name}</h3>
        <p className="py-2 text-center text-sm text-colorMedium tracking-text ">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
