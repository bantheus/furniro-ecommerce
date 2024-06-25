interface LinksProps {
  href: string;
  label: string;
}

export const navLinks: LinksProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const helpLinks: LinksProps[] = [
  {
    href: "/payment-options",
    label: "Payment Options",
  },
  {
    href: "/returns",
    label: "Returns",
  },
  {
    href: "/privacy-policies",
    label: "Privacy Policies",
  },
];
