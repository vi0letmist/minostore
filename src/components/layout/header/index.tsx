"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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

  return (
    <>
      <header className="fixed w-full z-50 bg-bg-tertiary md:bg-brand-primary">
        <div className="flex items-center justify-between px-4 md:px-40">
          <div className="flex-1 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="p-6 rounded-full hidden md:flex"
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
            <h3 className="text-xl md:text-[56px] font-bold text-brand-primary md:text-white">
              mino.
            </h3>
          </div>
          <div className="flex-1 flex items-center justify-end gap-6">
            <Button variant="ghost" size="icon" className="p-6 rounded-full">
              <ShoppingCartIcon className="w-6 md:h-8 h-6 md:h-8 text-brand-primary md:text-brand-secondary" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex p-6 rounded-full"
            >
              <UserCircleIcon className="w-6 md:h-8 h-6 md:h-8 text-brand-primary md:text-brand-secondary" />
            </Button>
          </div>
        </div>
        <div className="flex md:hidden justify-center bg-brand-primary py-2">
          <p className="text-xs text-white">Gratis pengiriman di Pulau Jawa</p>
        </div>
        <Navbar className="hidden md:flex" />
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
