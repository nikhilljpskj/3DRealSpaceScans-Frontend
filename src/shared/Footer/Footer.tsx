import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";
import { Link } from 'react-router-dom';

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Company",
    menus: [
      { href: "/about", label: "About" },
      { href: "#", label: "Testimonials" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "Case Studies" },
    ],
  },
  {
    id: "1",
    title: "Services",
    menus: [
      { href: "/3d-virtual-tours", label: "3D virtual tours" },
      { href: "/digital-twin", label: "Digital twins for construction & architecture" },
      { href: "/virtual-staging", label: "Virtual staging" },
      { href: "/scan-to-bim", label: "Scan to BIM" },
      { href: "/scan-to-plan", label: "Scan to Plan" },
      { href: "/facility-management-scanning", label: "Facility Management Scanning" },
      { href: "/large-object-scanning", label: "Large Object Scanning" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
        {/* Logo and Description */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2">
        <Link to="/">
          <img 
            src="Logo.png" 
            alt="3DRealspace Scans" 
            className="w-40 object-contain" // Adjusted width of the logo
          />
        </Link>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300 text-justify">
            3DRealspace Scans provides innovative 3D scanning and virtual tour services across the USA. Specializing in digital twins for construction, architecture, and virtual staging, we bring spaces to life with precision and immersive detail, setting new standards in virtual engagement.
          </p>

        </div>


        {/* Render the remaining widget menus */}
        {widgetMenus.map(renderWidgetMenuItem)}

        {/* Contact Info */}
        <div className="text-sm">
          <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">Contact Info</h2>
          <ul className="mt-5 space-y-4">
            <li>Email: monemails@gmail.com</li>
            <li>Phone: 818-533-8313</li>
            <li>Address: Van Nuys, California</li>
          </ul>
          {/* Social Icons displayed horizontally */}
          <div className="mt-6">
            <SocialsList1 className="flex space-x-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
