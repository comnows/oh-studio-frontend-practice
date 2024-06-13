import { Link } from "react-router-dom";
import { Link as LinkType } from "../../lib/types";

type LinkProps = LinkType & {
  isSelected: boolean;
};

function NavbarLink({ name, href, isSelected }: LinkProps) {
  return (
    <div
      className={
        "flex-1 align-middle text-center rounded-[30px]" +
        (isSelected ? " bg-white" : "")
      }
    >
      <Link
        to={href}
        className="block w-full h-10 text-sm leading-9 md:leading-10"
      >
        {name}
      </Link>
    </div>
  );
}

export default NavbarLink;
