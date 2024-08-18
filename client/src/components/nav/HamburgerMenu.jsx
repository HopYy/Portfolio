import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const HamburgerMenu = ({ links }) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <div
        className="cursor-pointer mr-8 mt-8 mb-3 p-2 rounded-lg bg-third-color"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      >
        {openMenu ? (
          <X color="white" size={23} />
        ) : (
          <Menu color="white" size={23} />
        )}
      </div>
      <div
        className={`p-6 mr-8 rounded-lg bg-third-color absolute right-0 top-full transition-all ${
          openMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((link) => (
            <li
              key={link.href}
              className={`text-sm font-semibold transition-colors hover:text-white whitespace-nowrap ${
                location.pathname === link.href ? "text-white" : "text-gray-300"
              }`}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
