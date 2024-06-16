import Question from "../Question";
import RadioGroup from "../RadioGroup";

function CompanySizeForm() {
  const answer = [
    "Only me",
    "1-5 employees",
    "6-10 employees",
    "11-100 employees",
    "Over 100 employees",
  ] as const;

  return (
    <>
      <Question>What's your company size?</Question>
      <div className="mt-2">
        <RadioGroup name="companySize" answers={answer} />
      </div>
      <div className="flex justify-between mt-2">
        <button>Back</button>
        <button className="bg-[#64748B] text-white rounded-lg px-3 py-2">
          Next
        </button>
      </div>
    </>
  );
}

export default CompanySizeForm;
