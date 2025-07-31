import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Product = {
  name: string;
  image?: string;
};

type Brand = {
  name: string;
  products: Product[];
};

type NavigationMegaMenuProps = {
  title: string;
  brands: Brand[];
};

export const NavigationMegaMenu = ({
  title,
  brands,
}: NavigationMegaMenuProps) => {
  return (
    <>
      <h3 className="text-lg font-bold uppercase text-brand-primary mb-2">
        {title}
      </h3>
      <div className="w-full h-px bg-brand-primary my-4" />

      <div className="flex w-full">
        <ul className="flex flex-col w-1/3 text-brand-primary">
          {brands.map((brand, index) => (
            <li key={brand.name} className="relative group">
              <div className="flex items-center justify-between pe-6 h-[32px] cursor-pointer">
                <span className="text-base group-hover:font-bold">
                  {brand.name}
                </span>

                {brand.products.length > 0 && (
                  <ChevronRightIcon className="w-4 h-4 text-brand-secondary" />
                )}
              </div>

              {brand.products.length > 0 && (
                <ul
                  className="absolute left-full -top-8 w-full hidden group-hover:flex flex-col z-10"
                  style={{ top: `-${index * 32}px` }}
                >
                  {brand.products.map((product, productIndex) => (
                    <li
                      key={product.name}
                      className="relative group/product py-1 px-4 rounded-md cursor-pointer"
                    >
                      <span className="text-base group-hover/product:font-bold">
                        {product.name}
                      </span>

                      {product.image && (
                        <div
                          className="absolute left-full top-0 w-full py-1 hidden group-hover/product:block z-20 px-4 flex justify-center items-center"
                          style={{
                            top: `-${productIndex * 32}px`,
                            height: `${brand.products.length * 32}px`,
                          }}
                        >
                          <div className="relative w-full h-full flex justify-center items-center">
                            <div className="relative border">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={250}
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
