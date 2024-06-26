import Image from "next/image";

interface ProductProps {
  item: string;
  name: string;
  price: number;
  qty: number;
}

const Product = ({ item, name, price, qty }: ProductProps) => {
  return (
    <div className="flex gap-4 p-2">
      <Image
        src={item}
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
            <h3 className="font-semibold">{name}</h3>
            <div className="rounded-sm bg-gray-50 p-1">${price}</div>
          </div>

          {/* description */}
          <div className="text-sm text-gray-500">available</div>
        </div>

        {/* bottom */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Qty. {qty}</span>
          <span className="text-blue-500">Remove</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
