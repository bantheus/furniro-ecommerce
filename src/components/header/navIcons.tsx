import { Bell } from "lucide-react";
import Cart from "./cart";
import UserMenu from "./userMenu";

const NavIcons = () => {
  return (
    <nav className="hidden items-center gap-x-8 lg:flex">
      <UserMenu />
      <Bell className="size-6 cursor-pointer transition-colors hover:text-primary" />
      <Cart />
    </nav>
  );
};

export default NavIcons;
