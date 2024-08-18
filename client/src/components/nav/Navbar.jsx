import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const links = [
  {
    label: "About me",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Resume",
    href: "/resume",
  },
  {
    label: "Contact me",
    href: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const link = links.find((link) => link.href === location.pathname);
    setTitle(link.label);
  }, [location]);

  return (
    <div className="flex-1 flex justify-between items-start">
      <h1 className="text-2xl text-white font-bold m-8 whitespace-nowrap">{title}</h1>
      <nav className="bg-third-color w-fit px-10 py-8 rounded-bl-xl">
        <ul className="flex items-center gap-16">
          {links.map((link) => (
            <li
              key={link.href}
              className={`text-sm font-semibold transition-colors hover:text-white whitespace-nowrap ${
                location.pathname === link.href ? "text-white" : "text-gray-300"
              }`}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
