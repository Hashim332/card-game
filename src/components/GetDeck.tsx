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
      <div>{deckId}</div>
      <button
        onClick={fetchDeck}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition m-4"
      >
        Get new deck
      </button>
      <DrawCards deckId={deckId} />
    </div>
  );
}
