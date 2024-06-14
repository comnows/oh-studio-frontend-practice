import { Children as ChildrenType } from "../../lib/types";

function ExpertiseTag({ children }: ChildrenType) {
  return <p className="bg-light-gray rounded-[30px] px-3 py-2">{children}</p>;
}

export default ExpertiseTag;
