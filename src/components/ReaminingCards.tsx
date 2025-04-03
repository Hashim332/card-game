type RemainingCardsProps = {
  remainingCards: number;
};

export default function RemainingCards({
  remainingCards,
}: RemainingCardsProps) {
  return (
    <div className="text-xl font-bold">Remaining cards: {remainingCards}</div>
  );
}
