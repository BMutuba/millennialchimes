"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  const links = {
    user: [
      { name: "Signup", href: "/signup" },
      { name: "Login", href: "/login" },
    ],
    info: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
    articles: [
      { name: "Tech News", href: "/tech-news" },
      { name: "New Tech", href: "/new-tech" },
      { name: "Interesting Reads", href: "/reads" },
    ],
  };

  if (path === "/login" || path === "/signup") {
    return null;
  }
  return (
    <footer className=" bg-black text-white font-sans font-bold  -m-3 gap-5 p-4 pt-4 text-xsm sm:text-sm">
      <div className="flex flex-col sm:flex-row-reverse gap-4 ">
        {Object.entries(links).map(([key, value], index) => (
          <div key={index} className="flex flex-col w-1/2 sm:max-w-52">
            <h6 className="font-bold uppercase underline hover:cursor-pointer">
              {key}
            </h6>
            <div className="flex sm:flex-col sm:items-start items-center my-3 gap-4">
              {value.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  className="hover:opacity-100 opacity-70"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <p className="sm:self-end w-1/2 text-xsm">
          &copy; 2023 Millennial Chimes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
