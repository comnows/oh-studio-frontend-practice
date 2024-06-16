import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ThankForm() {
  return (
    <>
      <div className="flex flex-col items-center">
        <FaRegCircleCheck className="text-6xl" data-aos="fade-up" />
        <h3
          className="font-semibold mt-3"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Thank you!
        </h3>
        <p
          className="text-sm text-dark-gray"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          We appreciate your feedback.
        </p>
        <Link
          to="/form/result"
          className="bg-[#64748B] text-sm text-white rounded-lg mt-4 px-3 py-2"
        >
          See Result
        </Link>
      </div>
    </>
  );
}

export default ThankForm;
