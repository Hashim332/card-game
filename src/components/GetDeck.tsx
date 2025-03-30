import { useEffect, useState } from "react";
import DrawCards from "./DrawCards";

export default function GetDeck() {
  function fetchDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then((res) => res.json())
      .then((data) => {
        setDeckId(data.deck_id);
        return data; // Return the data for use elsewhere if needed
      });
  }

  const [deckId, setDeckId] = useState(0);

  useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <div className="">
      <button
        onClick={fetchDeck}
        className="bg-emerald-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 active:bg-emerald-800 transform hover:scale-105 active:scale-95 transition-all duration-200 m-6"
      >
        Get New Deck
      </button>
      <DrawCards deckId={deckId} />
    </div>
  );
}
