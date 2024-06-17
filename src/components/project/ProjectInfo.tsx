function ProjectInfo() {
  return (
    <div className="flex max-md:flex-col gap-[10px] py-5 md:py-10">
      <div className="flex-1 flex flex-col gap-[10px] font-medium">
        <p className="text-dark-gray">Client</p>
        <p>Aire</p>
      </div>
      <div className="flex-1 flex flex-col gap-[10px] font-medium">
        <p className="text-dark-gray">Studio</p>
        <p>OH&CO</p>
      </div>
      <div className="flex-1 flex flex-col gap-[10px] font-medium">
        <p className="text-dark-gray">Role</p>
        <p>Creative Director</p>
      </div>
      <div className="flex-1 flex flex-col gap-[10px] font-medium">
        <p className="text-dark-gray">Focus</p>
        <p>Brand Identity</p>
      </div>
    </div>
  );
}

export default ProjectInfo;
