import ProductList from "@/components/categoryList/categoryList";
import ProductCard from "@/components/productList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative h-[600px] xl:h-[800px] 2xl:h-[900px]">
        <Image
          src="/bg.png"
          alt=""
          width={1440}
          height={1000}
          priority
          quality={100}
          className="absolute left-0 top-0 -z-10 h-[600px] w-full object-cover object-center xl:h-[800px] 2xl:h-[900px] 2xl:object-bottom"
        />

        <div className="container mx-auto flex h-full w-full items-center px-6 lg:px-12">
          <div className="hidden w-1/2 md:flex" />
          <div className="flex flex-col justify-center rounded-md bg-muted-foreground p-6 shadow-sm md:w-1/2 md:px-12 md:pb-6 md:pt-12">
            <p className="mb-4 font-semibold text-fontColor-primary md:mb-6">
              New Arrival
            </p>
            <h1 className="mb-4 text-2xl font-bold text-primary md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
              Discover Our <br /> New Collection
            </h1>
            <p className="mb-12 text-balance font-medium text-fontColor-primary lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            <Button className="h-[54px] w-[202px] rounded-none lg:h-[74px] lg:w-[222px]">
              BUY NOW
            </Button>
          </div>
        </div>
      </main>

      <section className="container mx-auto flex w-full flex-col items-center justify-center px-6 py-16 lg:px-12">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-fontColor-primary">
            Browse The Range
          </h2>
          <p className="text-lg text-fontColor-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="mt-10 w-full">
          <ProductList />
        </div>
      </section>

      <section className="container mx-auto flex w-full flex-col items-center justify-center px-6 py-16 lg:px-12">
        <h2 className="text-4xl font-bold text-fontColor-primary">
          Our Products
        </h2>

        <div className="mt-10 w-full">
          <ProductCard />
        </div>
      </section>
    </>
  );
}
