import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 space-y-8 md:space-y-0 lg:justify-between">
      <ProductCard image="/product_1.png" category="Dining" />
      <ProductCard image="/product_2.png" category="Living" />
      <ProductCard image="/product_3.png" category="Bedroom" />
    </div>
  );
};

export default ProductList;
