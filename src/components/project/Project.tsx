import ExpertiseTag from "../general/ExpertiseTag";
import Contact from "../contact/Contact";
import Footer from "../general/Footer";
import {
  Card01,
  Card02,
  Card03,
  Card06,
  Card10,
  Project01,
  Project02,
  Project03,
  Project04,
  Project05,
  Project06,
  Project07,
} from "../../lib/images";
import SingleImageColumn from "./SingleImageColumn";
import DoubleImageColumn from "./DoubleImageColumn";
import ScrollToTop from "../general/ScrollToTop";
import CloseButton from "./CloseButton";
import Description from "./Description";
import ProjectInfo from "./ProjectInfo";

function Project() {
  return (
    <>
      <ScrollToTop />
      <CloseButton />
      <div className="flex justify-center">
        <div
          className="flex flex-col items-center justify-center gap-10 w-full max-w-[1400px] h-[50vh] xl:h-[70vh] mt-[110px] p-5 md:p-10"
          data-aos="fade-up"
        >
          <h1 className="md:max-xl:max-w-[610px] max-w-[700px] text-4xl text md:text-5xl xl:text-7xl !leading-tight font-medium text-center tracking-tighter">
            A better way to deal with every day
          </h1>
          <ExpertiseTag>Aire</ExpertiseTag>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex flex-col gap-5 w-full max-w-[1400px] p-5 md:p-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <SingleImageColumn image={Card02} />

          <ProjectInfo />

          <DoubleImageColumn image1={Project07} image2={Card06} />

          <Description />

          <SingleImageColumn image={Project02} />
          <DoubleImageColumn image1={Card01} image2={Card03} />
          <SingleImageColumn image={Project01} />
          <SingleImageColumn image={Project03} />
          <SingleImageColumn image={Project06} />
          <SingleImageColumn image={Project05} />
          <DoubleImageColumn image1={Card10} image2={Project04} />
        </div>
      </div>
      <Contact size="section" />
      <Footer />
    </>
  );
}

export default Project;
