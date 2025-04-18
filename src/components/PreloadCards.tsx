import { useEffect, useState } from "react";
import { PlayingCard } from "./WarGameSession";

export default function PreloadCards() {
  const [allCards, setAllCards] = useState<PlayingCard[]>([]);

  useEffect(() => {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then((res) => res.json())
      .then((data1) => {
        fetch(
          `https://apis.scrimba.com/deckofcards/api/deck/${data1.deck_id}/draw/?count=52`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setAllCards(data.cards);
          });
      });
  }, []);

  return (
    <div className="hidden">
      {allCards.map((card, index) => {
        return <img key={index} src={card.image} />;
      })}
    </div>
  );
}
