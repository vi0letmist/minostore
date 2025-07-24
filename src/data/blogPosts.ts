// src/data/blogPosts.ts

// Define an interface for BlogPost if using TypeScript
export interface BlogPost {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  comment: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
    image: "/images/blog/108bc457391a429ef9b6060d45f91e830eedf7ee.png",
    excerpt:
      "Laiknya diri sendiri, sepatu juga butuh dirawat. Seti- daknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan se...",
    date: "2020-11-30T00:00:00Z",
    category: "Promo",
    author: "admin",
    comment: "3",
  },
  {
    id: 2,
    title: "Mino Shoe Store Siap Semarakkan Harbolnas 11.11!",
    image: "/images/blog/26c1d14be97a2a35faf2892aff2155fedf40370a.png",
    excerpt:
      "Akan ada banyak sekali promo dari diskon ongkir, potongan harga, hingga cashback sehingga kamu bisa mendapat barang yang kamu suka.",
    date: "2020-11-28T00:00:00Z",
    category: "Promo",
    author: "admin",
    comment: "3",
  },
  {
    id: 3,
    title: "Tips Agar Kaki Tidak Keseleo Sewaktu Berlari",
    image: "/images/blog/30f94b2b8d9d510d541e32d9dea66f094198f7ab.png",
    excerpt:
      "Jogging atau lari-lari pendek menjadi salah satu tren olahraga di tengah pandemi. Namun, sayangnya tren ini diikuti oleh pelari pemula.",
    date: "2020-11-26T00:00:00Z",
    category: "Tips & Trik",
    author: "admin",
    comment: "3",
  },
];
