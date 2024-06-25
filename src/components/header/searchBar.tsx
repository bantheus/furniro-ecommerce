"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;

    if (search) {
      router.push(`/list?name=${search}`);
    }
  };

  return (
    <form
      className="hidden items-center gap-4 rounded-md bg-gray-100 p-1 md:flex lg:w-[30%]"
      onSubmit={handleSearch}
    >
      <Input
        name="search"
        placeholder="Search"
        className="border-none bg-transparent outline-none placeholder:text-gray-800 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button size="icon">
        <Search className="size-5" />
      </Button>
    </form>
  );
};

export default SearchBar;
