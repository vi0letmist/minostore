"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavigationMegaMenu } from "./NavigationMegaMenu";

interface NavbarProps {
  className?: string;
}

const brands = [
  {
    name: "Semua Merek",
    products: [],
  },
  {
    name: "X-Voyager",
    products: [
      {
        name: "Vintage Forrester",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "Vintage Strobero",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "Vintage Shoe 1.0",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "El Dorado",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "Unhinted",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "Cursed Again",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "Nurture",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
      {
        name: "Secret Sky 2021",
        image: "/images/products/55fe570a34e17c20c3bbd4b0f18cea72f316b0cc.png",
      },
    ],
  },
  {
    name: "Balancia",
    products: [],
  },
  {
    name: "Cadilac",
    products: [],
  },
  {
    name: "Playoon",
    products: [],
  },
  {
    name: "Machia",
    products: [],
  },
  {
    name: "Everest",
    products: [],
  },
  {
    name: "Marathon",
    products: [],
  },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const isMobile = className && className.includes("flex-col");

  if (isMobile) {
    return (
      <nav className={`bg-white h-full overflow-y-auto ${className}`}>
        <ul className="flex flex-col text-brand-primary">
          <li>
            <Link
              href="/"
              className="block py-3 px-4 transition-colors duration-200"
            >
              Beranda
            </Link>
          </li>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-bundel" className="border-b-0">
              <AccordionTrigger className="py-3 px-4 text-base text-left w-full hover:bg-brand-primary hover:text-white data-[state=open]:bg-brand-primary data-[state=open]:text-white rounded-none transition-colors duration-200">
                Bundel
              </AccordionTrigger>
              <AccordionContent className="p-0 bg-brand-primary">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="/bundle/1"
                      className="block py-3 pl-8 pr-4 text-white hover:bg-brand-darker transition-colors duration-200"
                    >
                      Sub kategori 1
                    </Link>
                  </li>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-sub-kategori-2"
                      className="border-b-0"
                    >
                      <AccordionTrigger className="py-3 pl-8 pr-4 text-left w-full text-white hover:bg-brand-darker data-[state=open]:bg-brand-darker rounded-none transition-colors duration-200">
                        Sub kategori 2
                      </AccordionTrigger>
                      <AccordionContent className="p-0 bg-brand-darker">
                        <ul className="flex flex-col">
                          <li>
                            <Link
                              href="/bundle/2/sub1"
                              className="block py-3 pl-12 pr-4 text-white hover:bg-brand-darker transition-colors duration-200"
                            >
                              Sub-sub kategori 1
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/bundle/2/sub2"
                              className="block py-3 pl-12 pr-4 text-white hover:bg-brand-darker transition-colors duration-200"
                            >
                              Sub-sub kategori 2
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <li>
                    <Link
                      href="/bundle/3"
                      className="block py-3 pl-8 pr-4 text-white hover:bg-brand-darker transition-colors duration-200"
                    >
                      Sub kategori 3
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <li>
            <Link
              href="/promo"
              className="block py-3 px-4 font-base text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
            >
              Promo
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="block py-3 px-4 font-base text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home menu */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Beranda</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Belanja</NavigationMenuTrigger>
            <NavigationMenuContent className="px-40 py-4">
              <NavigationMegaMenu title="Belanja" brands={brands} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Bundel 1</NavigationMenuTrigger>
            <NavigationMenuContent className="px-40 py-4">
              <NavigationMegaMenu title="Bundel 1" brands={brands} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Bundel 2</NavigationMenuTrigger>
            <NavigationMenuContent className="px-40 py-4">
              <NavigationMegaMenu title="Bundel 2" brands={brands} />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/promo">Promo</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/blog">Blog</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
