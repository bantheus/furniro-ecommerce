"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import NotifyPin from "./notifyPin";
import Product from "./product";

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
            <>
              <div className="flex flex-col gap-4">
                {/* item */}
                <Product
                  item="/item_2.png"
                  name="Product Name"
                  price={49}
                  qty={2}
                />

                {/* item */}
                <Product
                  item="/item.png"
                  name="Product Name"
                  price={49}
                  qty={2}
                />
              </div>

              <div className="p-2">
                <div className="flex items-center justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>$89</span>
                </div>

                <p className="mb-4 mt-2 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>

                <div className="flex justify-between text-sm">
                  <Button variant="outline">View Cart</Button>
                  <Button>Checkout</Button>
                </div>
              </div>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <NotifyPin quantity="2" />
    </div>
  );
};

export default Cart;
