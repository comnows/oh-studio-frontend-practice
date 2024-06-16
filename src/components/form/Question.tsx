type QuestionProps = {
  children: string;
};

function Question({ children }: QuestionProps) {
  return (
    <>
      <h3 className="font-semibold" data-aos="fade-up">
        {children}
      </h3>
      <p
        className="text-sm text-dark-gray"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Please select one of the following options:
      </p>
    </>
  );
}

export default Question;
