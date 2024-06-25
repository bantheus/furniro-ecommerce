"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Cart = () => {
  const cartItems = true;

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <ShoppingCart className="size-6 cursor-pointer transition-colors hover:text-primary" />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-4 mt-4 w-max">
          <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>

          {!cartItems ? (
            <DropdownMenuItem>Cart is empty</DropdownMenuItem>
          ) : (
            <div className="flex flex-col gap-4">
              {/* item */}
              <div className="flex gap-4 p-2">
                <Image
                  src="/item.png"
                  alt=""
                  width={72}
                  height={96}
                  className="rounded-md object-cover"
                />

                <div className="flex w-full flex-col justify-between">
                  {/* top */}
                  <div>
                    {/* title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="rounded-sm bg-gray-50 p-1">$49</div>
                    </div>

                    {/* description */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>

                  {/* bottom */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>

              {/* item */}
              <div className="flex gap-4 p-2">
                <Image
                  src="/item_2.png"
                  alt=""
                  width={72}
                  height={96}
                  className="rounded-md object-cover"
                />

                <div className="flex w-full flex-col justify-between">
                  {/* top */}
                  <div>
                    {/* title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">Product Name</h3>
                      <div className="rounded-sm bg-gray-50 p-1">$49</div>
                    </div>

                    {/* description */}
                    <div className="text-sm text-gray-500">available</div>
                  </div>

                  {/* bottom */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="absolute -right-4 -top-4 flex size-6 items-center justify-center rounded-full bg-primary text-sm text-white">
        2
      </div>
    </div>
  );
};

export default Cart;
