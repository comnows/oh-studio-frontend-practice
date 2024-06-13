import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center h-[84px] md:h-[108px] px-2 py-5 md:px-[40px] md:py-[30px] bg-transparent">
      <div className="flex gap-2 w-[400px] h-full bg-light-gray rounded-[50px] p-1 overflow-hidden backdrop-blur-lg">
        <NavbarLink name="Home" link="/" isSelected={false} />
        <NavbarLink name="Profile" link="/" isSelected={false} />
        <NavbarLink name="Contact" link="/Contact" isSelected={false} />
        <NavbarLink name="Form" link="/Form" isSelected={false} />
      </div>
    </div>
  );
}

export default Navbar;
