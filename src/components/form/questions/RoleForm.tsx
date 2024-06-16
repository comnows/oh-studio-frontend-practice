import Question from "../Question";
import RadioGroup from "../RadioGroup";

function RoleForm() {
  const answer = [
    "Founder",
    "Executive",
    "Product Manager",
    "Product Owner",
    "Software Engineer",
  ] as const;

  return (
    <>
      <Question>What is your role?</Question>
      <div className="mt-2">
        <RadioGroup name="role" answers={answer} />
      </div>
      <div className="flex justify-end mt-2">
        <button className="bg-[#64748B] text-white rounded-lg px-3 py-2">
          Next
        </button>
      </div>
    </>
  );
}

export default RoleForm;
