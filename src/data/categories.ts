export interface Category {
  id: number;
  name: string;
  image: string;
  position: "left" | "right" | "center";
  textColor: string;
  imagePosition: "top" | "center" | "bottom";
  href: string;
}

export const category: Category[] = [
  {
    id: 1,
    name: "Sepatu Anak",
    image: "/images/category/4643b127562879fa504c1c4cb57a8e889372b438.jpg",
    position: "left",
    textColor: "text-white",
    imagePosition: "center",
    href: "/kategori/sepatu-anak",
  },
  {
    id: 2,
    name: "Sandal",
    image: "/images/category/05db34d0fa6ff274c1c1a46119bd13b61ae53540.jpg",
    position: "right",
    textColor: "text-white",
    imagePosition: "center",
    href: "/kategori/sandal",
  },
  {
    id: 3,
    name: "Sepatu Wanita",
    image: "/images/category/7f79c5d2b2ac0e467109804d27e259277824a431.jpg",
    position: "left",
    textColor: "text-white",
    imagePosition: "bottom",
    href: "/kategori/sepatu-wanita",
  },
  {
    id: 4,
    name: "Sepatu Pria",
    image: "/images/category/06e2d59ecbbf72d87c4aed180b4237ee74d0f164.jpg",
    position: "right",
    textColor: "text-text-secondary",
    imagePosition: "bottom",
    href: "/kategori/sepatu-pria",
  },
];
