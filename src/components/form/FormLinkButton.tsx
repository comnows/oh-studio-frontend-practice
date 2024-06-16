import { useFormContext } from "./FormContext";
import { Link } from "react-router-dom";
import { QuestionGroup } from "../../lib/types";

type FormLinkButtonProps = {
  name: string;
  group: QuestionGroup;
  path: string;
};

function FormLinkButton({ name, group, path }: FormLinkButtonProps) {
  const { currentAnswers } = useFormContext();

  return (
    <>
      {currentAnswers[group] ? (
        <Link
          to={path}
          className="bg-[#64748B] text-white rounded-lg px-3 py-2"
        >
          {name}
        </Link>
      ) : (
        <span className="bg-gray-400 opacity-50 text-white rounded-lg px-3 py-2 cursor-not-allowed">
          {name}
        </span>
      )}
    </>
  );
}

export default FormLinkButton;
