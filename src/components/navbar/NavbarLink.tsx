type LinkProps = {
  name: string;
  link: string;
  isSelected: boolean;
};

function NavbarLink({ name, link, isSelected }: LinkProps) {
  return (
    <div
      className={
        "flex-1 align-middle text-center rounded-[30px]" +
        (isSelected ? " bg-white" : "")
      }
    >
      <a
        href={link}
        className="block w-full h-10 text-sm leading-9 md:leading-10"
      >
        {name}
      </a>
    </div>
  );
}

export default NavbarLink;
