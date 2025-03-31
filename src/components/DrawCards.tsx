import { PlayingCard } from "./WarGameSession";

type DrawCardsProps = {
  deckId: number;
  setCardData: React.Dispatch<React.SetStateAction<PlayingCard[]>>;
};

export default function DrawCards({ deckId, setCardData }: DrawCardsProps) {
  function drawCards() {
    fetch(
      `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.cards);
      });
  }

  return (
    <div className="p-6 flex flex-wrap flex-col justify-center gap-4">
      <button
        onClick={drawCards}
        className="bg-emerald-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-600 active:bg-emerald-800 transform hover:scale-105 active:scale-95 transition-all duration-200 mx-auto"
      >
        Draw Cards
      </button>
    </div>
  );
}
