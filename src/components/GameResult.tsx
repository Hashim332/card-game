type GameResultProps = {
  gameResult: string;
};
export default function GameResult({ gameResult }: GameResultProps) {
  return (
    <h3 className="text-2xl font-semibold">{gameResult && `${gameResult}`}</h3>
  );
}
