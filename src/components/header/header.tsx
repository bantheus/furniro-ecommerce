import { Bell, Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navLinks } from "./links";

const Header = () => {
  return (
    <header className="container mx-auto flex w-full items-center justify-between px-6 py-7 lg:px-12">
      <div>
        <Image
          src="/logo.svg"
          alt="logo Furniro"
          width={185}
          height={41}
          quality={100}
        />
      </div>

      <nav className="hidden gap-x-14 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-medium transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav className="hidden gap-x-8 lg:flex">
        <User className="cursor-pointer transition-colors hover:text-primary" />
        <Search className="cursor-pointer transition-colors hover:text-primary" />
        <Bell className="cursor-pointer transition-colors hover:text-primary" />
        <ShoppingCart className="cursor-pointer transition-colors hover:text-primary" />
      </nav>

      <Sheet>
        <SheetTrigger className="flex lg:hidden" asChild>
          <Menu className="size-6 hover:text-primary" />
        </SheetTrigger>
        <SheetContent
          side="top"
          className="flex h-[60%] flex-col items-center justify-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="w-1/2 justify-center text-lg font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
