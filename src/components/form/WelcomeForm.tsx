import { useEffect } from "react";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function WelcomeForm() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEnterKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        navigate("role");
      }
    };
    window.addEventListener("keydown", handleEnterKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEnterKeyDown);
    };
  }, [navigate]);

  return (
    <>
      <h3 className="font-semibold">Welcome!</h3>
      <p className="text-sm text-dark-gray">
        Thanks for providing your feedback - let's go!
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Link
          to="role"
          className="bg-[#64748B] text-white ring-[#64748B] ring-2 ring-offset-2 rounded-lg px-3 py-2"
        >
          Next
        </Link>
        <p className="flex gap-1 text-xs">
          Press Enter
          <IoReturnDownBackSharp />
        </p>
      </div>
    </>
  );
}

export default WelcomeForm;
