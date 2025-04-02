// type DrawCardsProps = {
//   deckId: number;
//   setCardData: React.Dispatch<React.SetStateAction<PlayingCard[]>>;
// };

type DrawCardsProps = {
  drawCards: () => void;
};

export default function DrawCards({ drawCards }: DrawCardsProps) {
  // function drawCards() {
  //   fetch(
  //     `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCardData(data.cards);
  //     });
  // }

  return (
    <button
      onClick={drawCards}
      className="w-40 bg-emerald-700 text-white font-extrabold text-lg px-6 py-2 rounded-lg shadow-lg 
             hover:bg-emerald-600 active:bg-emerald-800 transform hover:scale-105 active:scale-95 
             transition-all duration-200"
    >
      Draw Cards
    </button>
  );
}
