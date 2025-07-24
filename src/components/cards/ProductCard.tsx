"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { formatRupiah } from "@/utils/formatCurrency";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";

interface Product {
  id: number;
  brand_name: string;
  name: string;
  image: string;
  category: string[];
  price: number;
  discount: number;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [ratingSize, setRatingSize] = useState(16);

  useEffect(() => {
    const updateSize = () => {
      setRatingSize(window.innerWidth < 768 ? 16 : 20);
    };

    updateSize(); // run on mount
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <div className="group">
      <div className="relative w-full overflow-hidden border-2">
        <Image
          src={product.image}
          alt={`${product.brand_name} - ${product.name}`}
          width={1000}
          height={1000}
          className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-120"
        />
      </div>
      <h5 className="text-[10px] md:text-xs font-bold text-text-tertiary uppercase tracking-wider py-4">
        {product.category.join(", ")}
      </h5>
      <h3 className="text-sm md:text-base font-bold mb-2">
        {product.brand_name} - {product.name}
      </h3>
      <Rating
        value={product.rating}
        size={ratingSize}
        className="text-brand-tertiary"
      />
      <div className="py-2 flex flex-col md:flex-row gap-2">
        {product.price !== product.discount && (
          <p className="text-xs md:text-sm text-text-tertiary line-through">
            {formatRupiah(product.price)}
          </p>
        )}
        <p className="text-sm md:text-base font-bold text-brand-primary">
          {formatRupiah(product.discount)}
        </p>
      </div>
      <Button size="sm">add to cart</Button>
    </div>
  );
};

export default ProductCard;
