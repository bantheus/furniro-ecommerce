"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const UserMenu = () => {
  const isLoggedId = true;
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedId) {
      router.push("/login");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User
          onClick={handleProfile}
          className="size-6 cursor-pointer transition-colors hover:text-primary"
        />
      </DropdownMenuTrigger>
      {isLoggedId && (
        <DropdownMenuContent className="ml-14 mt-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default UserMenu;
