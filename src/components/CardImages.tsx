import { PlayingCard } from "./WarGameSession";

interface CardDataProps {
  cardData: PlayingCard[];
}

export default function CardImages({ cardData }: CardDataProps) {
  const cardImages =
    cardData &&
    cardData.map((cardObject: PlayingCard, index: number) => (
      <img
        key={index}
        className="w-28 h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300 m-2"
        src={cardObject.image}
      />
    ));

  return (
    <div className="flex flex-col flex-wrap justify-center">
      {cardData && cardImages}
    </div>
  );
}
