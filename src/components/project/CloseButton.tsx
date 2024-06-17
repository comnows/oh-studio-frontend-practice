import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

function CloseButton() {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center px-2 py-5 md:px-[40px] md:py-[30px] bg-transparent z-10">
      <Link
        to="/"
        className="flex gap-2 bg-light-gray text-xl rounded-[50px] p-[14px] overflow-hidden backdrop-blur-lg"
      >
        <IoCloseOutline />
      </Link>
    </div>
  );
}

export default CloseButton;
