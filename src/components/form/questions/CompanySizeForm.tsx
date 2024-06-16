import { Link } from "react-router-dom";
import Question from "../Question";
import RadioGroup from "../RadioGroup";
import FormLinkButton from "../FormLinkButton";

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
        <Link to="/form/role">Back</Link>
        <FormLinkButton
          name="Next"
          group="companySize"
          path="/form/knowusfrom"
        />
      </div>
    </>
  );
}

export default CompanySizeForm;
