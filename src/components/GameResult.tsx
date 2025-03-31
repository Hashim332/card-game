import { PlayingCard } from "./WarGameSession";

type GameResultProps = {
  cardData: PlayingCard[];
};

export default function GameResult({ cardData }: GameResultProps) {
  // implementing some logic to compare card values
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
      console.log("card 1 wins");
      return card1Value;
    } else if (card2Value > card1Value) {
      console.log("card 2 wins");
      return card2Value;
    } else {
      console.log("its a tie!");
      return card1Value && card2Value;
    }
  }
  //   if (cardData) {
  //     compareCards(cardData[0], cardData[1]);
  //   }

  return <div>game result goes here</div>;
}
