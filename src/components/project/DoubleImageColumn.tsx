type DoubleImageColumnProps = {
  image1: string;
  image2: string;
};

function DoubleImageColumn({ image1, image2 }: DoubleImageColumnProps) {
  return (
    <div className="flex max-md:flex-col gap-5">
      <div className="aspect-[1.36/1] overflow-hidden rounded-xl">
        <img
          src={image1}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="aspect-[1.36/1] overflow-hidden rounded-xl">
        <img
          src={image2}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}

export default DoubleImageColumn;
