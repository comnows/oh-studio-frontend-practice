import Title from "../general/Title";
import Card from "./Card";
import cardImage from "/images/card/card-01.jpg";

function Home() {
  return (
    <>
      <Title />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1400px] pt-5 px-5 md:pt-10 md:px-10">
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} />
          <Card name="Meadow" image={cardImage} isLock={true} />
          <Card name="Meadow" image={cardImage} isLock={true} />
          <Card name="Meadow" image={cardImage} />
        </div>
      </div>
    </>
  );
}

export default Home;
