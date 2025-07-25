import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const UserMenu = () => {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative hidden md:flex" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="icon"
        className="p-6 rounded-full"
        onClick={() => setOpenUserMenu(!openUserMenu)}
      >
        <UserCircleIcon className="w-6 md:h-8 h-6 md:h-8 text-brand-primary md:text-brand-secondary" />
      </Button>

      {openUserMenu && (
        <div className="absolute right-0 top-12 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-lg z-50 py-2">
          <Link
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </Link>
          <Link
            href="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
