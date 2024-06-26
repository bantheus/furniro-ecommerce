import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  image: string;
  category: string;
}

const ProductCard = ({ image, category }: ProductCardProps) => {
  return (
    <Link href="/" className="group w-full sm:w-[28%]">
      <Image
        src={image}
        alt=""
        width={381}
        height={480}
        quality={100}
        className="object-cover duration-300 group-hover:brightness-50"
      />

      <h2 className="underline-offset-3 mt-4 text-center text-xl font-semibold text-fontColor-primary duration-300 group-hover:underline lg:text-2xl">
        {category}
      </h2>
    </Link>
  );
};

export default ProductCard;
