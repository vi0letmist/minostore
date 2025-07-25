"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/ui/user-menu";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Navbar from "../navbar";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className="fixed w-full z-50 bg-bg-tertiary md:bg-brand-primary">
        <div className="flex items-center justify-between px-4 sm:px-24 md:px-32 lg:px-40">
          <div className="flex-1 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="p-6 rounded-full hidden md:flex"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <MagnifyingGlassIcon className="w-6 md:h-8 h-6 md:h-8 text-brand-primary md:text-brand-secondary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="p-6 rounded-full md:hidden"
              onClick={() => setOpenSidebar(true)}
            >
              <Bars3Icon className="w-6 h-6 text-brand-primary" />
            </Button>
          </div>
          <div className="flex-1 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="text-xl md:text-[56px] font-bold text-brand-primary md:text-white cursor-pointer"
            >
              mino.
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="relative group">
              <Button variant="ghost" size="icon" className="p-6 rounded-full">
                <ShoppingCartIcon className="w-6 md:h-8 h-6 md:h-8 text-brand-primary md:text-brand-secondary" />
              </Button>

              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 text-sm text-gray-600 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                Keranjang kamu kosong.
              </div>
            </div>
            <UserMenu />
          </div>
        </div>
        <div className="flex md:hidden justify-center bg-brand-primary py-2">
          <p className="text-xs text-white">Gratis pengiriman di Pulau Jawa</p>
        </div>
        <Navbar className="hidden md:flex" />

        {showSearch && (
          <div className="absolute top-full left-0 w-full bg-white px-40 py-4 shadow transition-all duration-300 ease-in-out z-40">
            <div className="flex items-center gap-4">
              <input
                type="text"
                autoFocus
                placeholder="Cari produk..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
              />
              <Button
                variant="outline"
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-red-500 transition py-2"
                aria-label="Tutup pencarian"
              >
                <XMarkIcon className="text-brand-primary h-5 h-5" />
              </Button>
            </div>
          </div>
        )}
      </header>

      <p>sass</p>

      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setOpenSidebar(false)}
      />

      {/* Sidebar content */}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 w-full h-full bg-white text-brand-primary shadow-lg transform transition-transform duration-300 overflow-y-auto",
          openSidebar ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <h3 className="text-2xl font-bold">mino.</h3>
          <button onClick={() => setOpenSidebar(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="">
          <Navbar className="flex flex-col gap-2 text-brand-primary" />
        </div>
      </aside>
    </>
  );
};

export default Header;
