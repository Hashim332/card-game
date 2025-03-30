import { useState } from "react";
import CardImages from "./CardImages";

type DrawCardsProps = {
  deckId: number;
};

type PlayingCard = {
  code: string;
  image: string;
};

export default function DrawCards({ deckId }: DrawCardsProps) {
  //draw 2 cards from deckofcard API
  //use deck id from GetDeck
  const [cardData, setCardData] = useState<PlayingCard[]>([]);

  console.log("initial val of card data:", cardData);

  function drawCards() {
    fetch(
      `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.cards);
        // console.log("card data was fetched");
        // console.log(cardData);
      });
  }

  return (
    <div className="p-4 flex flex-wrap flex-col justify-center gap-4">
      <div className="text-lg font-semibold mb-4">draw cards component</div>
      <button
        onClick={drawCards}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition m-2"
      >
        Draw cards
      </button>
      <div className="flex flex-wrap justify-center gap-4">
        <CardImages cardData={cardData} />
      </div>
    </div>
  );
}
