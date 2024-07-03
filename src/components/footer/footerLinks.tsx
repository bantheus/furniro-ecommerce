import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  linkToMap: LinkItem[];
}

const FooterLinks = ({ title, linkToMap }: FooterLinksProps) => {
  return (
    <div className="flex flex-col gap-y-10">
      <p className="font-medium text-[#9F9F9F]">{title}</p>

      <ul className="flex flex-col gap-y-3">
        {linkToMap.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="font-medium transition-colors hover:text-primary md:justify-center"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
