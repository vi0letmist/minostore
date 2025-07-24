"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import HeroSection from "@/components/sections/hero";

import ExellenceCard from "@/components/cards/ExellenceCard";
import ProductCard from "@/components/cards/ProductCard";
import CategoryCard from "@/components/cards/CategoryCard";
import BlogCard from "@/components/cards/BlogCard";

import QualityIcon from "@/components/icons/QualityIcon";
import GiftIcon from "@/components/icons/GiftIcon";
import ReturnIcon from "@/components/icons/ReturnIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";

import { products } from "@/data/products";
import { category } from "@/data/categories";
import { blogPosts } from "@/data/blogPosts";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const el = sliderRef.current;
    if (!el) return;

    if (el.scrollLeft <= 0) {
      el.scrollTo({
        left: el.scrollWidth,
        behavior: "smooth",
      });
    } else {
      el.scrollBy({
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const el = sliderRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    if (Math.ceil(el.scrollLeft) >= maxScrollLeft) {
      el.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      el.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Exellence Section */}
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 py-10 px-4 md:px-40 gap-4 md:gap-8">
        <ExellenceCard
          icon={QualityIcon}
          title="Kualitas Terpercaya"
          description="Produk kami di buat dari bahan berkualitas. Kami bekerjasama dengan mereka yang paling berpengalaman dalam industri."
        />
        <ExellenceCard
          icon={GiftIcon}
          iconColor="text-brand-secondary"
          title="Kirim sebagai Hadiah"
          description="Ingin memberi bingkisan pada orang tersayang dengan kemasan serta pesan khusus? Sampaikan saja, kami yang siapkan."
        />
        <ExellenceCard
          icon={ReturnIcon}
          title="Pengembalian Mudah"
          description="Tidak puas dengan pembelian Anda (kualitas buruk atau salah ukuran)? Kami siap untuk melakukan retur barang kapanpun."
        />
        <ExellenceCard
          icon={ServiceIcon}
          iconColor="text-brand-secondary"
          title="Layanan Pelanggan"
          description="Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan pertanyaan Anda."
        />
      </section>

      {/* This Week Selection */}
      <section className="py-10 px-4 md:px-40">
        <div className="flex items-center justify-between mb-6">
          <div className="">
            <h2 className="text-lg md:text-[28px] font-bold">
              Pilihan Minggu Ini
            </h2>
          </div>
          <div className="flex">
            <Button variant={"secondary"}>Produk Lainnya</Button>
          </div>
        </div>

        <div className="relative">
          <Button
            onClick={scrollLeft}
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute -left-5 top-1/4 -translate-y-1/4 z-10 bg-bg-primary rounded-full w-10 h-10 p-2 shadow-md"
          >
            <ChevronLeftIcon className="w-6 h-6 text-brand-secondary" />
          </Button>

          <Button
            onClick={scrollRight}
            variant="ghost"
            size="icon"
            className="hidden md:flex absolute -right-5 top-1/4 -translate-y-1/4 z-10 bg-bg-primary rounded-full w-10 h-10 p-2 shadow-md"
          >
            <ChevronRightIcon className="w-6 h-6 text-brand-secondary" />
          </Button>

          <div
            ref={sliderRef}
            className="flex md:flex-row flex-wrap md:flex-nowrap md:gap-8 gap-4 md:overflow-x-auto overflow-visible md:scroll-smooth no-scrollbar"
          >
            {products?.map((product) => (
              <div
                key={product.id}
                className="w-[43vw] md:w-[17.5vw] flex-shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-10 px-4 md:px-40">
        <div className="grid grid-cols-2 flex gap-8">
          {category?.map((cat) => (
            <CategoryCard
              key={cat.id}
              imageUrl={cat.image}
              title={cat.name}
              position={cat.position as "left" | "right" | "center"}
              textColor={cat.textColor}
              imagePosition={cat.imagePosition as "top" | "center" | "bottom"}
            />
          ))}
        </div>
      </section>

      {/* Discount Section */}
      <section className="relative h-[300px] bg-[url('/images/3af9ca2bbae059896f7a2b617ac2d25cbbf359ff.jpg')] bg-center bg-cover bg-no-repeat bg-fixed py-10">
        <div className="absolute inset-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 flex items-center justify-between h-full px-10 md:px-40">
          <div className="text-white">
            <h3 className="font-bold text-xl md:text-2xl">
              Diskon Nggak Pake Tanggung.
            </h3>
            <p className="text-base">Plus bonus ongkir ke seluruh Indonesia.</p>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Button className="">Info Selengkapnya</Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 md:px-40 py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="">
            <h2 className="text-lg md:text-[28px] font-bold">Blog</h2>
          </div>
          <div className="flex">
            <Button variant={"secondary"}>Lihat Semua</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
