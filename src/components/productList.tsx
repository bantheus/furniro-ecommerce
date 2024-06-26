import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 lg:justify-between">
      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        discount="Rp 3.500.000"
        discountPercentage="-30%"
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        newProduct
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        discount="Rp 3.500.000"
        discountPercentage="-40%"
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        discount="Rp 3.500.000"
        discountPercentage="-30%"
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        newProduct
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
        discount="Rp 3.500.000"
        discountPercentage="-40%"
      />

      <ProductCard
        image="/pr_1.png"
        name="Syltherine"
        description="Stylish cafe chair"
        price="Rp 2.500.000"
      />
    </div>
  );
};

export default ProductList;
