type GameResultProps = {
  gameResult: string;
};
export default function GameResult({ gameResult }: GameResultProps) {
  return (
    <h3 className="text-2xl font-semibold animate-glows mt-6 pb-8">
      {gameResult && `${gameResult}`}
    </h3>
  );
}
