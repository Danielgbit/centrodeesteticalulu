import { Product } from "@/types/Product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="w-[280px] h-[480px] flex flex-col justify-between items-center bg-card rounded-lg shadow">
      <div className="bg-white w-full">
        <Image
          alt={product.name}
          src={product.image}
          width={300}
          height={200}
          className="w-18 h-74 rounded py-5 m-auto"
        />
      </div>
      <div>
        <h3 className="text-center text-light pt-4 px-2 flex items-center justify-center tracking-text h-15 text-sm font-bold">
          {product.name}
        </h3>
        <p className="text-center pt-3 px-3 h-15 flex items-center justify-center text-xs font-normal text-colorMedium tracking-text ">
          {product.description}
        </p>
        <p className="text-center py-2 price flex items-center justify-center h-15 text-sm text-white font-bold ">
          <span className="tracking-text">$ </span>
          {product.price.toLocaleString("es-CO")}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
