"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  position?: "left" | "right" | "center";
  textColor?: string;
  imagePosition?: "top" | "center" | "bottom";
  href?: string;
}

const positionMap: Record<"left" | "right" | "center", string> = {
  left: "bottom-4 left-4 text-left",
  right: "bottom-4 right-4 text-right",
  center: "bottom-4 left-1/2 -translate-x-1/2 text-center",
};

const imagePositionMap: Record<"top" | "center" | "bottom", string> = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  imageUrl,
  title,
  position = "left",
  textColor = "text-white",
  imagePosition = "center",
  href = "/kategori",
}) => {
  return (
    <Link
      href={href}
      className="block col-span-1 relative group cursor-pointer"
    >
      <div className="relative w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={1080}
          height={1080}
          className={`w-full max-h-[200px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-120 ${imagePositionMap[imagePosition]}`}
        />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className={`absolute ${positionMap[position]} ${textColor}`}>
          <h3 className="text-sm md:text-2xl font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
