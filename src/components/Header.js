import React from "react";
import { NavLink } from "react-router-dom";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCTS", link: "/products" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BookOpenIcon className="h-6 w-6 text-green-500" />
            <span className="font-bold px-1">Farm</span>
          </div>
          <ul className="flex">
            {Links.map((link) => (
              <li key={link.link} className="mx-4 font-bold text-sm">
                <NavLink
                  to={link.link}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
