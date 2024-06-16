import Question from "../Question";
import RadioGroup from "../RadioGroup";
import FormLinkButton from "../FormLinkButton";

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
        <FormLinkButton name="Next" group="role" path="/form/companysize" />
      </div>
    </>
  );
}

export default RoleForm;
