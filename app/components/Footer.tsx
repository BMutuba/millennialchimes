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
    <footer className="flex bg-black text-white font-sans font-bold   -m-3 gap-5 p-4 pt-4 text-xsm sm:text-sm">
      <p className="self-end">&copy; 2023 Millennial Chimes</p>
      
      <div className="flex justify-self-center w-1/2">
          {Object.entries(links).map(([key, value], index) => (
            <div key={index} className="flex flex-col space-y-4 pl-5 flex-1 ">
              <h6 className="font-bold uppercase underline hover:cursor-pointer">
                {key}
              </h6>
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
          ))}
      </div>    
    
    </footer>
  );
};

export default Footer;
