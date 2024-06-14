import { FiArrowUpRight, FiLock } from "react-icons/fi";

type CardProps = {
  name: string;
  image: string;
  isLock?: boolean;
};

function Card({ name, image, isLock = false }: CardProps) {
  return (
    <a className="group flex max-md:gap-[10px] max-md:flex-col relative aspect-[1.3/1] *:duration-500 overflow-hidden">
      <div className=" relative w-full h-full rounded-xl overflow-hidden">
        <div className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] rounded-xl overflow-hidden md:group-hover:bg-black transition-colors duration-500">
          <div className="w-full h-full opacity-100 md:group-hover:blur-md transition duration-500">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div className="md:absolute top-0 inset-x-0 md:p-5 flex md:flex-col max-md:gap-2 text-sm md:text-lg text-black md:text-white md:opacity-0 md:group-hover:opacity-100 transition">
        <p className="">{name}</p>
        {isLock && <p className=" opacity-50">Coming Soon</p>}
      </div>
      <div
        className={
          "absolute md:top-10 md:right-10 bg-white text-black md:group-hover:opacity-100 md:group-hover:top-5 md:group-hover:right-5 rounded-full p-4 transition-all" +
          (isLock
            ? " md:bg-black md:text-white md:opacity-0 top-5 right-5"
            : " opacity-0")
        }
      >
        {isLock ? <FiLock /> : <FiArrowUpRight />}
      </div>
    </a>
  );
}

export default Card;
