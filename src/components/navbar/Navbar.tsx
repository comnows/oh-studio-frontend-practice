import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../../lib/types";
import NavbarLink from "./NavbarLink";

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Contact", href: "/contact" },
  { name: "Form", href: "/form" },
] as const;

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const active = links.find((link) =>
      location.pathname.includes(link.name.toLowerCase()),
    );

    active ? setActiveLink(active.name) : setActiveLink(links[0].name);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center h-[88px] md:h-[108px] px-2 py-5 md:px-[40px] md:py-[30px] bg-transparent">
      <div className="flex gap-2 w-full max-w-[400px] h-full bg-light-gray rounded-[50px] p-1 overflow-hidden backdrop-blur-lg">
        {links.map((link) => (
          <NavbarLink
            name={link.name}
            href={link.href}
            isSelected={activeLink === link.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
