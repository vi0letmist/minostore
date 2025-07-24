import Image from "next/image";

const contents = [
  {
    title: "Mino Store",
    data: ["Yogyakarta", "Kebumen", "Purwokerto", "Kudus", "Surakarta"],
  },
  {
    title: "Belanja",
    data: [
      "Sepatu Pria",
      "Sepatu Wanita",
      "Sepatu Uniseks",
      "Pernak-pernik",
      "Aksesoris",
    ],
  },
  {
    title: "Layanan",
    data: [
      "Bantuan",
      "Cara Pengembalian",
      "Indeks Produk",
      "Promo & Diskon",
      "Konfirmasi Transfer",
      "Status Pesanan",
    ],
  },
  {
    title: "Tentang Kami",
    data: [
      "Tentang Kami",
      "Pers/Media",
      "Karir",
      "Persyaratan & Ketentuan",
      "Kebijakan Privasi",
      "Hubungi Kami",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative">
      {/* payment gateway */}
      <div className="flex items-center justify-center bg-white py-8 md:py-4">
        <Image
          src="/images/4689c5901e61ea00017f68a15f454b6b05ef35ae.jpg"
          alt="payment gateway"
          width={1000}
          height={1000}
          className="w-auto h-[42px] md:h-[70px] object-contain"
        />
      </div>

      {/* footer content */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-brand-primary gap-8 py-8 px-4 md:px-40 text-white">
        {contents?.map((content, index) => (
          <div className="col-span-1" key={index}>
            <h6 className="text-sm md:text-base font-bold p-2">
              {content.title}
            </h6>
            <ul>
              {content.data.map((content, indexJ) => (
                <li className="text-sm md:text-sm px-2 py-1" key={indexJ}>
                  {content}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center bg-brand-secondary py-4">
        <p className="text-xs font-bold text-white">
          (c) 2025 CV. MinoStore Minomartani
        </p>
      </div>
    </footer>
  );
};

export default Footer;
