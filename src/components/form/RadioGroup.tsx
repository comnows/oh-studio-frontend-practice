import { Answer, QuestionGroup } from "../../lib/types";
import { useFormContext } from "./FormContext";

type RadioProps = {
  name: QuestionGroup;
  answers: readonly string[];
};

function RadioGroup({ name, answers }: RadioProps) {
  const { currentAnswers, setCurrentAnswers } = useFormContext();

  return (
    <>
      {answers.map((answer, index) => (
        <label
          key={`${name}-${index}`}
          className="block bg-[#F8FAFC] has-[:checked]:bg-[#CBD5E1] border-2 has-[:checked]:border-[#64748B] border-[#CBD5E1] rounded-lg mb-2 px-4 py-4"
        >
          <input
            type="radio"
            name={name}
            value={answer}
            id={`${name}-${index}`}
            checked={currentAnswers[name] === answer}
            onChange={(e) =>
              setCurrentAnswers((current: Answer) => ({
                ...current,
                [name]: e.target.value,
              }))
            }
            className="accent-[#64748B] mr-[10px]"
          />
          {answer}
        </label>
      ))}
    </>
  );
}

export default RadioGroup;
