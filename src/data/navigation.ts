import { MegamenuItem, NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";


const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/3d-virtual-tours",
    name: "3D Virtual Tours for Real Estate",
  },
  {
    id: ncNanoId(),
    href: "/digital-twin",
    name: "Digital Twins for Construction & Architecture",
    isNew: false,
  },
  {
    id: ncNanoId(),
    href: "/virtual-staging",
    name: "Virtual Staging",
    isNew: false,
  },
];

const companyChildElements: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Testimonials",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Terms and Conditions",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Case studies",
  },

];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "",
    name: "Our services",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },

  {
    id: ncNanoId(),
    href: "/about",
    name: "Company",
    type: "dropdown",
    children: companyChildElements,
  },
];
