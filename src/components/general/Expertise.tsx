import { Children as ChildrenType } from "../../lib/types";

function Expertise({ children }: ChildrenType) {
  return (
    <div className="hidden md:flex items-center gap-[10px] text-sm">
      <p>Expertise</p>
      {children}
    </div>
  );
}

export default Expertise;
