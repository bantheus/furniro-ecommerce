import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
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
        <div className="hidden w-1/2 md:flex"></div>
        <div className="flex flex-col justify-center rounded-md bg-muted-foreground p-6 shadow-sm md:w-1/2 md:px-12 md:pb-6 md:pt-12">
          <p className="mb-4 font-semibold md:mb-6">New Arrival</p>
          <h1 className="mb-4 text-2xl font-bold text-primary md:mb-6 md:text-3xl lg:text-4xl xl:text-5xl">
            Discover Our <br /> New Collection
          </h1>
          <p className="mb-12 text-balance font-medium lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <Button className="h-[54px] w-[202px] rounded-none lg:h-[74px] lg:w-[222px]">
            BUY NOW
          </Button>
        </div>
      </div>
    </main>
  );
}
