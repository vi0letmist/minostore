"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatRupiah } from "@/utils/formatCurrency";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

interface Product {
  id: number;
  brand_name: string;
  name: string;
  image: string;
  category: string[];
  price: number;
  discount: number;
  rating: number;
  href?: string;
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

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Link href={product.href || "#"} className="block group cursor-pointer">
      <div className="relative w-full overflow-hidden border-2">
        {product.price !== product.discount && (
          <div className="absolute md:hidden top-2 left-2 bg-brand-tertiary text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md z-10 uppercase">
            <CurrencyDollarIcon className="w-3 h-3 md:w-4 md:h-4" />
            sale
          </div>
        )}
        <Image
          src={product.image}
          alt={`${product.brand_name} - ${product.name}`}
          width={1000}
          height={1000}
          className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-120"
        />
      </div>
      <h5 className="text-[10px] md:text-xs font-bold text-text-tertiary uppercase tracking-wider py-3">
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
      <div className="py-3 flex flex-col md:flex-row gap-2">
        {product.price !== product.discount && (
          <p className="text-xs md:text-sm text-text-tertiary line-through">
            {formatRupiah(product.price)}
          </p>
        )}
        <p className="text-sm md:text-base font-bold text-brand-primary">
          {formatRupiah(product.discount)}
        </p>
      </div>
      <Button
        size="sm"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        add to cart
      </Button>
    </Link>
  );
};

export default ProductCard;
