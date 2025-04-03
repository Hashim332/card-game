type ScoreboardProps = {
  gamesPlayed: number;
  userWins: number;
};

export default function Scoreboard({ gamesPlayed, userWins }: ScoreboardProps) {
  const computerWins = gamesPlayed - userWins;

  return (
    <div className="flex justify-center gap-12 text-xl">
      <div
        className={`px-6 py-3 rounded-lg font-bold ${
          userWins > computerWins
            ? "bg-emerald-700 text-white shadow-lg"
            : "bg-gray-700/40 text-white/90"
        }`}
      >
        User wins: {userWins}
      </div>

      <div
        className={`px-6 py-3 rounded-lg font-bold ${
          computerWins > userWins
            ? "bg-rose-700 text-white shadow-lg"
            : "bg-gray-700/40 text-white/90"
        }`}
      >
        Computer wins: {computerWins}
      </div>
    </div>
  );
}
