"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const NavBar = () => {
  const path = usePathname();

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

  if (path === "/login" || path === "/signup") {
    return null;
  }

  return (
    <nav className="flex w-full items-center justify-between ">
      <Logo />
      <div className="flex justify-between w-96 ">
        {links.map((link, index) => (
          <Link
            className={`${link.className} p-1 font-bold ${
              path === link.href ? "underline" : ""
            }`}
            href={link.href}
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
