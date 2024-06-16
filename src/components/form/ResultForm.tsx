import { FaRegCircleCheck } from "react-icons/fa6";
import { useFormContext } from "./FormContext";

function ResultForm() {
  const { currentAnswers } = useFormContext();
  return (
    <div className="ml-10">
      <div className="flex items-center gap-4 text-sm mb-3" data-aos="fade-up">
        <FaRegCircleCheck className="text-xl text-dark-gray" />
        <p>Welcome Card</p>
      </div>
      <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
        <p className="text-sm text-dark-gray mb-1">What is your role?</p>
        <p className="font-semibold">
          {currentAnswers["role"] || "Not Answered Yet"}
        </p>
      </div>
      <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
        <p className="text-sm text-dark-gray mb-1">
          What's is your company size?
        </p>
        <p className="font-semibold">
          {currentAnswers["companySize"] || "Not Answered Yet"}
        </p>
      </div>
      <div className="mb-9" data-aos="fade-up" data-aos-delay="300">
        <p className="text-sm text-dark-gray">
          How did you hear about us first?
        </p>
        <p className="font-semibold">
          {currentAnswers["knowUsFrom"] || "Not Answered Yet"}
        </p>
      </div>
      <div
        className="flex items-center gap-4 text-sm"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <FaRegCircleCheck className="text-xl text-dark-gray" />
        <p className="bg-[#F1F5F9] rounded-full px-2">Completed</p>
      </div>
    </div>
  );
}

export default ResultForm;
