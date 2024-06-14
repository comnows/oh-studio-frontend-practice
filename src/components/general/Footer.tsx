import { FaAsterisk } from "react-icons/fa6";

type FooterProps = {
  isFixed?: boolean;
};

function Footer({ isFixed = false }: FooterProps) {
  return (
    <div
      className={
        "flex max-md:flex-col max-md:gap-[10px] md:justify-between items-center text-sm px-10 pt-10 pb-20 md:pb-10" +
        (isFixed ? " fixed bottom-0 inset-x-0 z-10" : "")
      }
    >
      <div className="flex max-md:flex-col items-center gap-3 md:gap-[10px]">
        <FaAsterisk className="text-3xl" />
        <p>&#169; Oil Harris 2023</p>
      </div>
      <div className="flex gap-[15px]">
        <a href="http://twitter.com/" target="_blank">
          Twitter
        </a>
        <a href="http://www.linkedin.com/" target="_blank">
          Linkedin
        </a>
        <a href="mailto:watthanandh.l@gmail.com" target="_blank">
          Mail
        </a>
      </div>
    </div>
  );
}

export default Footer;
