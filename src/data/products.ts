export interface Product {
  id: number;
  brand_name: string;
  name: string;
  image: string;
  category: string[];
  price: number;
  discount: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    brand_name: "Playoon",
    name: "Kelimutu Run Model A",
    image: "/images/products/ba462de5ac76d8efff74cd33fad4e691c01c41e8.png",
    category: ["Sepatu Pria", "Olahraga"],
    price: 387000,
    discount: 325000,
    rating: 3.5,
  },
  {
    id: 2,
    brand_name: "Le Modiste",
    name: "Sepatu Kasual Wanita",
    image: "/images/products/4858e21f9af7febb9c92ef8722a43a793416eea0.png",
    category: ["Sepatu Wanita", "Kasual"],
    price: 319000,
    discount: 319000,
    rating: 3.5,
  },
  {
    id: 3,
    brand_name: "X-Voyager",
    name: "Vintage Forrester",
    image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
    category: ["Sepatu Pria", "Kasual"],
    price: 402000,
    discount: 402000,
    rating: 5,
  },
  {
    id: 4,
    brand_name: "Cadillac",
    name: "Insigma 91",
    image: "/images/products/5dcf2c987b5005e5bc445b2479eb643ccac18fa8.png",
    category: ["Sandal", "Jepit Pria"],
    price: 387000,
    discount: 387000,
    rating: 2,
  },
  {
    id: 5,
    brand_name: "Le Modiste",
    name: "Sepatu Kasual Wanita",
    image: "/images/products/4858e21f9af7febb9c92ef8722a43a793416eea0.png",
    category: ["Sepatu Wanita", "Kasual"],
    price: 319000,
    discount: 319000,
    rating: 3.5,
  },
  {
    id: 6,
    brand_name: "X-Voyager",
    name: "Vintage Forrester",
    image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
    category: ["Sepatu Pria", "Kasual"],
    price: 402000,
    discount: 402000,
    rating: 5,
  },
];
