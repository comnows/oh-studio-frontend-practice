import { Link } from "react-router-dom";
import Question from "../Question";
import RadioGroup from "../RadioGroup";
import FormLinkButton from "../FormLinkButton";

function KnowUsFromForm() {
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
        <Link to="/form/companysize">Back</Link>
        <FormLinkButton name="Finish" group="knowUsFrom" path="/form/thank" />
      </div>
    </>
  );
}

export default KnowUsFromForm;
