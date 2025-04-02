type DrawCardsProps = {
  drawCards: () => void;
  remainingCards: number;
};

export default function DrawCards({
  drawCards,
  remainingCards,
}: DrawCardsProps) {
  const areCardsRemaining = remainingCards > 0;

  return (
    <div>
      {areCardsRemaining ? (
        <button
          onClick={drawCards}
          className="w-40 bg-emerald-700 text-white font-extrabold text-lg px-6 py-2 rounded-lg shadow-lg 
             hover:bg-emerald-600 active:bg-emerald-800 transform hover:scale-105 active:scale-95 
             transition-all duration-200"
        >
          Draw Cards
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
