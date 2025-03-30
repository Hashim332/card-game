type DrawCardsProps = {
  deckId: number;
};

export default function DrawCards({ deck_Id }: DrawCardsProps) {
  //draw 2 cards from deckofcard API
  //use deck id from GetDeck

  function drawCards() {
    fetch(
      `https://apis.scrimba.com/deckofcards/api/deck/${deck_Id}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div>
      <div>draw cards component</div>
      <button
        onClick={drawCards}
        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition m-2"
      >
        Draw cards
      </button>
    </div>
  );
}
