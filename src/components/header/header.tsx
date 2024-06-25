import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { navLinks } from "./links";
import NavIcons from "./navIcons";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <header className="container mx-auto flex w-full items-center justify-between gap-x-6 px-6 py-7 lg:px-12">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo Furniro"
          width={185}
          height={41}
          quality={100}
          priority
        />
      </Link>

      <nav className="hidden gap-x-14 lg:flex lg:gap-x-6">
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

      <SearchBar />

      <NavIcons />

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
          <Link
            href=""
            className="w-1/2 justify-center text-lg font-medium transition-colors hover:text-primary"
          >
            Login
          </Link>
          <Link
            href=""
            className="w-1/2 justify-center text-lg font-medium transition-colors hover:text-primary"
          >
            Cart(1)
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
