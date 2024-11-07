import React, { FC, useState } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";


import { NAVIGATION_DEMO } from "data/navigation"; // Import your navigation data

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:hidden">
          <img 
            src="Logo.png" 
            alt="3DRealspace Scans" 
            className="h-14 w-auto object-contain" 
          />
          <button onClick={toggleMobileMenu} className="text-gray-600 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
          <img 
            src="Logo.png" 
            alt="3DRealspace Scans" 
            className="h-14 w-auto object-contain" 
          />
          <Navigation />
        </div>

        <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex items-center space-x-0.5">
            <div className="px-1" />
            <ButtonPrimary href="/booking">Book an appointment</ButtonPrimary>
          </div>
          <div className="flex xl:hidden items-center">
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
  <div className="md:hidden bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
    <ul className="flex flex-col space-y-3">
      {NAVIGATION_DEMO.map((item) => (
        <li key={item.id} className="relative group">
          {item.type === "dropdown" ? (
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                // Toggle visibility of child items here
                const childMenu = e.currentTarget.nextElementSibling;
                if (childMenu) {
                  childMenu.classList.toggle("hidden");
                }
              }}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150 ease-in-out py-2 px-3 rounded-lg w-full text-left"
            >
              {item.name}
            </button>
          ) : (
            <a
              href={item.href}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150 ease-in-out py-2 px-3 rounded-lg"
            >
              {item.name}
            </a>
          )}
          {item.children && (
            <ul className="ml-4 mt-1 space-y-1 hidden">
              {item.children.map((child) => (
                <li key={child.id}>
                  <a
                    href={child.href}
                    className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-150 ease-in-out py-1 px-2 rounded-lg"
                  >
                    {child.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    <div className="flex justify-center mt-6">
      <ButtonPrimary href="/booking" className="w-full md:w-auto">
        Book an appointment
      </ButtonPrimary>
    </div>
  </div>
)}

    </div>
  );
};

export default MainNav1;
