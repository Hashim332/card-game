import { useEffect, useState } from "react";
import DrawCards from "./DrawCards";
import CardImages from "./CardImages";
import GameResult from "./GameResult";
import RemainingCards from "./ReaminingCards";
import Scoreboard from "./Scoreboard";

export type PlayingCard = {
  code: string;
  image: string;
};

export default function WarGameSession() {
  const [deckId, setDeckId] = useState(0);
  const [cardData, setCardData] = useState<PlayingCard[]>([]);
  const [remainingCards, setRemainingCards] = useState<number>(52);
  const [gamesPlayed, setGamesPlayed] = useState<number>(0);
  const [userWins, setUserWins] = useState(0);
  const winnerMessage =
    userWins > gamesPlayed - userWins ? "You won!" : "Computer won!";

  function fetchDeck() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
      .then((res) => res.json())
      .then((data) => {
        setDeckId(data.deck_id);
        setCardData([]); // Clear cards when getting a new deck
        setRemainingCards(52);
        setGamesPlayed(0);
        setUserWins(0);
        return data;
      });
  }

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

  function drawCards() {
    fetch(
      `https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCardData(data.cards);
        setRemainingCards(data.remaining);
        setGamesPlayed((prevGamesPlayed) => prevGamesPlayed + 1);

        // Update userWins if the user won
        if (data.cards.length === 2) {
          const result = compareCards(data.cards[0], data.cards[1]);
          if (result === "User wins!") {
            setUserWins((prevUserWins) => prevUserWins + 1);
          }
        }
      });
  }

  // Calculate game result during render based on current cardData
  let gameResult = "";
  if (cardData.length === 2) {
    gameResult = compareCards(cardData[0], cardData[1]);
  }

  return (
    <div className="flex flex-col pt-4 gap-8">
      <h1
        className={`text-4xl font-bold text-white ${
          gamesPlayed === 26 ? "bg-slate-900 p-4 rounded-lg animate-pulse" : ""
        }`}
      >
        {gamesPlayed === 26 ? winnerMessage : "Game of War"}
      </h1>

      <div className="flex justify-between lg:justify-evenly mt-10">
        <button
          onClick={fetchDeck}
          className="w-40 bg-emerald-700 text-white font-bold text-lg px-2 py-2 rounded-lg shadow-lg hover:bg-emerald-600 active:bg-emerald-800 transform hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Get New Deck
        </button>
        <DrawCards drawCards={drawCards} remainingCards={remainingCards} />
      </div>

      <RemainingCards remainingCards={remainingCards} />

      <Scoreboard gamesPlayed={gamesPlayed} userWins={userWins} />

      <div className="flex flex-wrap justify-center">
        <CardImages cardData={cardData} />
      </div>

      <GameResult gameResult={gameResult} />
    </div>
  );
}
