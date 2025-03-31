import { useEffect, useState } from "react";
import DrawCards from "./DrawCards";
import CardImages from "./CardImages";
import GameResult from "./GameResult";

export type PlayingCard = {
  code: string;
  image: string;
};

export default function WarGameSession() {
  function fetchDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then((res) => res.json())
      .then((data) => {
        setDeckId(data.deck_id);
        setCardData([]); // Clear cards when getting a new deck
        return data;
      });
  }

  const [deckId, setDeckId] = useState(0);
  const [cardData, setCardData] = useState<PlayingCard[]>([]);

  useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <div className="flex flex-col h-screen justify-start pt-4 gap-4">
      <button
        onClick={fetchDeck}
        className="bg-emerald-700 text-white font-bold text-lg px-6 py-2 rounded-lg mx-auto w-64"
      >
        Get New Deck
      </button>

      <DrawCards setCardData={setCardData} deckId={deckId} />

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <CardImages cardData={cardData} />
      </div>

      <GameResult cardData={cardData} />
    </div>
  );
}
