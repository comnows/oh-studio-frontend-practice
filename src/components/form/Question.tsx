type QuestionProps = {
  children: string;
};

function Question({ children }: QuestionProps) {
  return (
    <>
      <h3 className="font-semibold">{children}</h3>
      <p className="text-sm text-dark-gray">
        Please select one of the following options:
      </p>
    </>
  );
}

export default Question;
