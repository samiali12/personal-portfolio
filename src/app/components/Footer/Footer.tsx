import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    {
      id: 1,
      label: "About",
      href: "#about",
    },
    {
      id: 4,
      label: "Projects",
      href: "#project",
    },
    {
      id: 7,
      label: "Contacts",
      href: "#contact",
    },
  ];

  return (
    <div className="w-full py-10">
      <div className="max-w-6xl   mx-auto px-6">
        <div className="flex items-center justify-center">
          <h2 className="font-semibold text-xl ">Sami Ali</h2>
          <span className="text-red-500 text-3xl font-bold">.</span>
        </div>
        <div>
          <ul
            className={`hidden lg:flex items-center justify-center gap-6 lg:gap-8 
            } shadow-sm px-12 py-4 rounded-full transition-opacity duration-1000`}
          >
            {navItems.map((item) => (
              <li className="font-Ovo" key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-rose-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-800 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sami Ali. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
