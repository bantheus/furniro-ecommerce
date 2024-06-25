import { Bell, ShoppingCart, User } from "lucide-react";

const NavIcons = () => {
  return (
    <nav className="hidden gap-x-8 lg:flex">
      <User className="size-6 cursor-pointer transition-colors hover:text-primary" />
      <Bell className="size-6 cursor-pointer transition-colors hover:text-primary" />
      <ShoppingCart className="size-6 cursor-pointer transition-colors hover:text-primary" />
    </nav>
  );
};

export default NavIcons;
