import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  discount?: string;
  discountPercentage?: string;
  newProduct?: boolean;
}

const ProductCard = ({
  image,
  name,
  description,
  price,
  discount,
  discountPercentage,
  newProduct,
}: ProductCardProps) => {
  return (
    <Link
      href="/"
      className="relative min-h-[375px] w-full bg-gray-100 sm:w-[22%] md:w-[40%] lg:w-[22%]"
    >
      <Image
        src={image}
        alt=""
        width={285}
        height={301}
        quality={100}
        className="w-full object-cover duration-300"
      />

      <div className="group absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-transparent duration-300 hover:bg-black/35">
        <Button
          className="hidden rounded-none bg-white text-primary transition-colors hover:text-white group-hover:flex"
          size="lg"
        >
          Add to cart
        </Button>
      </div>

      <div className="px-4 pb-4">
        <h2 className="mt-4 text-xl font-semibold text-fontColor-primary xl:text-2xl">
          {name}
        </h2>
        <p className="my-2 text-sm font-medium text-fontColor-secondary xl:text-base">
          {description}
        </p>

        <div className="flex min-h-[48px] items-center justify-between">
          <p className="w-1/2 font-semibold text-fontColor-primary xl:text-lg">
            {price}
          </p>

          {discount && (
            <p className="text-xs text-gray-400 line-through">{discount}</p>
          )}
        </div>
      </div>

      {newProduct && (
        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
          New
        </div>
      )}

      {discountPercentage && (
        <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-rose-500 text-xs text-white">
          {discountPercentage}
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
