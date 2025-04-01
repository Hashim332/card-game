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

  function compareCards(card1: PlayingCard, card2: PlayingCard) {
    const cardHeirarchy = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    const card1Value: number = cardHeirarchy.indexOf(card1.code[0]);
    const card2Value: number = cardHeirarchy.indexOf(card2.code[0]);

    if (card1Value > card2Value) {
      return "Computer wins!";
    } else if (card2Value > card1Value) {
      return "User wins!";
    } else {
      return "It's a tie!";
    }
  }

  let gameResult: string = "";
  if (cardData.length === 2) {
    gameResult = compareCards(cardData[0], cardData[1]);
  }

  return (
    <div className="flex flex-col pt-4 gap-8">
      <div className="flex justify-between lg:justify-evenly">
        <button
          onClick={fetchDeck}
          className="w-40 bg-emerald-700 text-white font-bold text-lg px-2 py-2 rounded-lg shadow-lg 
             hover:bg-emerald-600 active:bg-emerald-800 transform hover:scale-105 active:scale-95 
             transition-all duration-200"
        >
          Get New Deck
        </button>

        <DrawCards setCardData={setCardData} deckId={deckId} />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <CardImages cardData={cardData} />
      </div>

      <GameResult gameResult={gameResult} />
    </div>
  );
}
