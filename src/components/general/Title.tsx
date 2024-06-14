import Expertise from "./Expertise";
import ExpertiseTag from "./ExpertiseTag";

function Title() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-[1400px] h-[50vh] xl:h-[70vh] mt-[110px] p-5 md:p-10">
        <h1
          className="md:max-xl:max-w-[610px] max-w-[700px] text-4xl text md:text-5xl xl:text-7xl !leading-tight font-medium text-center tracking-tighter"
          data-aos="fade-up"
        >
          A brand and product designer working with clients globally
        </h1>
        <Expertise>
          <ExpertiseTag>Branding</ExpertiseTag>
          <ExpertiseTag>Product</ExpertiseTag>
          <ExpertiseTag>Design Systems</ExpertiseTag>
        </Expertise>
      </div>
    </div>
  );
}

export default Title;
