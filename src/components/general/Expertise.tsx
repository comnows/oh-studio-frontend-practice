import { Children as ChildrenType } from "../../lib/types";

function Expertise({ children }: ChildrenType) {
  return (
    <div
      className="hidden md:flex items-center gap-[10px] text-sm"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <p>Expertise</p>
      {children}
    </div>
  );
}

export default Expertise;
