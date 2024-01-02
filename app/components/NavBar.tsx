"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useMediaQuery } from "react-responsive";
import { use, useEffect, useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const path = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  console.log(isSmallScreen);

  interface Link {
    name: string;
    href: string;
    className?: string;
  }

  const links: Link[] = [
    {
      name: "LOGIN",
      href: "/login",
      className: "text-luckyBrown underline underline-offset-4",
    },
    { name: "SIGN UP", href: "/signup", className: "bg-black text-white" },
    { name: "ARTICLES", href: "/articles" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    if (!isSmallScreen) {
      setShowMenu(true);
    } else if (isSmallScreen) {
      setShowMenu(false);
    }
    setLoading(false);
  }, [isSmallScreen]);

  if (path === "/login" || path === "/signup" ) {
    return null;
  }

 

  return (
    <nav className="flex w-full items-center  justify-between text-xsm ">
      <Logo />
      <Image
        className={`${isSmallScreen && !showMenu ? "" : "hidden"} z-20`}
        src="/icons/hamburger.svg"
        width={35}
        height={35}
        alt="hamburger"
        onClick={() => setShowMenu(true)}
      />
      <Image
        className={`${isSmallScreen && showMenu ? "" : "hidden"} z-20`}
        src="/icons/close-sidebar-btn.svg"
        width={35}
        height={35}
        alt="close"
        onClick={() => setShowMenu(false)}
      />
      {showMenu && !loading && (
        <div className="flex flex-col sm:flex-row absolute  z-10 sm:relative  top-0 left-0 items-center justify-center gap-10 sm:gap-0 h-screen w-screen bg-white sm:justify-between sm:w-96 sm:h-fit ">
          {links.map((link, index) => (
            <Link
              className={`${link.className} p-1 font-bold ${
                path === link.href ? "underline" : ""
              }`}
              href={link.href}
              key={index}
              onClick={() => {
                isSmallScreen && setShowMenu(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
