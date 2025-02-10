"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavbarGradient from "@/app/assets/navbar-color.png";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useThemeContext } from "@/app/context/ThemeContext";

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

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScroll, setisScroll] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    });
  }, []);

  const handleTheme = () => {
    toggleTheme();
  };

  return (
    <nav className="w-full h-full">
      {theme === "light" ? (
        <div className="mx-auto fixed top-0 right-0 -z-10 w-11/12 translate-y-[-65%]">
          <Image src={NavbarGradient} alt="navbar-color" className="w-full" />
        </div>
      ) : (
        <div></div>
      )}
      <div className="w-full mx-auto px-8 py-8 z-50 fixed flex items-center justify-between">
        <div className="flex items-center justify-center">
          <h2 className="font-semibold text-xl ">Sami Ali</h2>
          <span className="text-red-500 text-3xl font-bold">.</span>
        </div>
        <div className="">
          <ul
            className={`hidden lg:flex items-center justify-center gap-6 lg:gap-8 ${theme === 'light' ?'bg-white' : ''}  ${
              isScroll ? "bg-opacity-100" : " bg-opacity-50"
            } shadow-sm px-12 py-4 rounded-full transition-opacity duration-1000 dark:border dark:border-rose-100`}
          >
            {navItems.map((item) => (
              <li className="font-Ovo" key={item.id}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between gap-6">
          <FaRegMoon
            size={28}
            className="cursor-pointer"
            onClick={handleTheme}
          />
          <button onClick={handleMenuOpen} className="lg:hidden">
            <MdOutlineMenu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`
        ${openMenu ? "translate-x-0" : "translate-x-full"}
        bg-slate-50 dark:bg-rose-500 w-1/2 fixed right-0 top-0 z-50 px-6 py-4 shadow-md transition-transform duration-1000`}
      >
        <button
          onClick={handleMenuOpen}
          className="w-full flex items-center justify-end"
        >
          <IoClose size={28} />
        </button>
        <ul className="h-screen flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={"#"}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
