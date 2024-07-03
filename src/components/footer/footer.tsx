import Image from "next/image";
import { helpLinks, navLinks } from "../header/links";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import FooterLinks from "./footerLinks";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto flex w-full flex-col justify-between gap-x-6 border-t-2 px-6 py-7 md:h-[400px] md:flex-row lg:px-12">
        <div className="mt-6 flex h-full flex-col gap-y-10 md:w-1/3">
          <Image
            src="/logo_2.svg"
            alt="logo Furniro"
            width={85}
            height={36}
            className="object-contain"
          />

          <p className="text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        <div className="mt-6 flex h-full justify-between md:w-1/3 md:justify-around">
          <FooterLinks title="Links" linkToMap={navLinks} />
          <FooterLinks title="Help" linkToMap={helpLinks} />
        </div>

        <div className="mt-6 flex h-full flex-col gap-y-6 md:w-1/3">
          <p className="font-medium text-[#9F9F9F]">Newsletter</p>

          <form className="flex items-center gap-4 border-b border-gray-800 p-1">
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="border-b border-none bg-transparent outline-none placeholder:text-gray-800 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="w-1/3 bg-transparent uppercase text-fontColor-primary hover:bg-transparent hover:text-primary">
              Subscribe
            </Button>
          </form>
        </div>
      </footer>

      <div className="container mx-auto w-full gap-x-6 border-t-2 px-6 py-7 lg:px-12">
        <p className="py-4 text-fontColor-primary">
          © 2024 Furniro. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
