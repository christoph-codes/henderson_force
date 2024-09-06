export type NavItem = {
  label: string;
  href?: string;
  target?: "_self" | "_blank";
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  // {
  // 	label: "Home",
  // 	href: "/",
  // 	target: "_self",
  // },
  {
    label: "Team",
    href: "/team",
    target: "_self",
  },
  {
    label: "Schedule",
    href: "/schedule",
    target: "_self",
  },
  {
    label: "News",
    href: "/news",
    target: "_self",
  },
  {
    label: "Media",
    href: "/media",
    target: "_self",
  },
  {
    label: "Partners",
    href: "/partners",
    target: "_self",
  },
  {
    label: "More",
    children: [
      {
        label: "Billet Information",
        href: "/billet",
        target: "_self",
      },
      {
        label: "USPHL",
        href: "https://www.usphlpremier.com/",
        target: "_blank",
      },
      {
        label: "About",
        href: "/about",
        target: "_self",
      },
    ],
  },
];
