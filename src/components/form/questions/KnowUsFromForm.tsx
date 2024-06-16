import Question from "../Question";
import RadioGroup from "../RadioGroup";

function RoleForm() {
  const answer = [
    "Recommendation",
    "Social Media",
    "Ads",
    "Google Search",
    "In a Podcast",
  ] as const;

  return (
    <>
      <Question>How did you hear about us first?</Question>
      <div className="mt-2">
        <RadioGroup name="knowUsFrom" answers={answer} />
      </div>
      <div className="flex justify-between mt-2">
        <button>Back</button>
        <button className="bg-[#64748B] text-white rounded-lg px-3 py-2">
          Finish
        </button>
      </div>
    </>
  );
}

export default RoleForm;
