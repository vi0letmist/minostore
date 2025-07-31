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
        left: -600,
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
        left: 600,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* Exellence Section */}
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 pt-4 md:pt-12 px-4 sm:px-24 md:px-32 lg:px-32 gap-4 md:gap-9 flex justify-between">
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
      <section className="pt-4 md:pt-12 px-4 sm:px-24 md:px-32 lg:px-32">
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
                className="w-[43vw] md:w-[18.5vw] flex-shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-4 md:py-12 px-4 sm:px-24 md:px-32 lg:px-32">
        <div className="grid grid-cols-2 flex gap-5">
          {category?.map((cat) => (
            <CategoryCard
              key={cat.id}
              imageUrl={cat.image}
              title={cat.name}
              position={cat.position as "left" | "right" | "center"}
              textColor={cat.textColor}
              imagePosition={cat.imagePosition as "top" | "center" | "bottom"}
              href={cat.href}
            />
          ))}
        </div>
      </section>

      {/* Discount Section */}
      <section className="relative h-[300px] bg-[url('/images/3af9ca2bbae059896f7a2b617ac2d25cbbf359ff.jpg')] bg-center bg-[length:280%] md:bg-cover bg-repeat md:bg-no-repeat bg-fixed py-10">
        <div className="absolute inset-0 bg-black/25 md:bg-black/0" />

        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 flex items-center justify-between h-full px-10 sm:px-24 md:px-32 lg:px-32">
          <div className="text-white">
            <h3 className="font-bold text-xl md:text-2xl">
              Diskon Nggak Pake Tanggung.
            </h3>
            <p className="text-base">Plus bonus ongkir ke seluruh Indonesia.</p>
          </div>
          <div className="flex items-center justify-start md:justify-end">
            <Button>Info Selengkapnya</Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pt-4 md:pt-12 px-4 sm:px-24 md:px-32 lg:px-32">
        <div className="flex items-center justify-between mb-6">
          <div className="">
            <h2 className="text-lg md:text-[28px] font-bold">Blog</h2>
          </div>
          <div className="flex">
            <Button variant={"secondary"}>Lihat Semua</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts?.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* What other says section */}
      {/* <section className="flex flex-col items-center justify-center px-4 py-6">
        <h2 className="text-lg md:text-[28px] font-bold mb-6">
          Apa Kata Mereka?
        </h2>
        <div className="flex flex-col items-center justify-center border rounded-lg p-4">
          <p className="text-sm text-accent-tertiary">
            Mino Clean masih tergolong jasa yang baru, tapi para kru dari jasa
            baru ini sudah lihai dalam membersihkan sepatu pelanggan. Beda jenis
            sepatu, beda teknik pembersihan yang digunakan. Salut.
          </p>
          <div className="flex w-full justify-between py-2">
            <div>img</div>
            <div className="">
              <h5 className="font-bold">Markus Sutiyoso</h5>
              <p className="uppercase text-xs text-accent-tertiary">
                Cirebon, Jawa Barat
              </p>
            </div>
            <div>
              <span className="text-4xl text-cyan-400 font-serif">”</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
