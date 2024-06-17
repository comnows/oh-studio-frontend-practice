type SingleImageColumnProps = {
  image: string;
};

function SingleImageColumn({ image }: SingleImageColumnProps) {
  return (
    <div className="aspect-[1.5/1] overflow-hidden rounded-xl">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}

export default SingleImageColumn;
