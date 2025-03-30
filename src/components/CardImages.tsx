type PlayingCard = {
  code: string;
  image: string;
};

interface CardDataProps {
  cardData: PlayingCard[];
}

export default function CardImages({ cardData }: CardDataProps) {
  const cardImages =
    cardData &&
    cardData.map((cardObject: PlayingCard, index: number) => (
      <img
        key={index}
        className="flex flex-col w-28 h-auto rounded-lg shadow-lg hover:scale-105 transition duration-300 m-4"
        src={cardObject.image}
      />
    ));
  return <div>{cardData && cardImages}</div>;
}
