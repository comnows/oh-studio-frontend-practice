import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import Footer from "../general/Footer";
import Title from "../general/Title";

import Card from "./Card";
import {
  Card01,
  Card02,
  Card03,
  Card04,
  Card05,
  Card06,
  Card07,
  Card08,
  Card09,
  Card10,
  Card11,
  Card12,
} from "../../lib/images";
import { CardType } from "../../lib/types";
import ScrollToTop from "../general/ScrollToTop";

const cards: CardType[] = [
  { name: "Meadow", image: Card01 },
  { name: "Orange Cat", image: Card02 },
  { name: "Bear", image: Card03 },
  { name: "Coffee", image: Card04 },
  { name: "Lamp", image: Card05 },
  { name: "Sea Lion", image: Card06 },
  { name: "Rango", image: Card07 },
  { name: "Rabbit", image: Card08 },
  { name: "Parrot", image: Card09, isVideo: true },
  { name: "Fox", image: Card10, isLock: true },
  { name: "Jelly Fish", image: Card11, isLock: true },
  { name: "Vegas", image: Card12, isVideo: true },
];

function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Title />
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-[1400px] pt-5 px-5 md:pt-10 md:px-10">
          {cards.map((card, index) => (
            <Card
              key={card.name + index}
              name={card.name}
              image={card.image}
              isLock={card.isLock}
              isVideo={card.isVideo}
            />
          ))}
        </div>
      </div>
      <Contact size="section" />
      <Footer />
    </>
  );
}

export default Home;
