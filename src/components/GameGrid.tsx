import useFetchGames from '../hooks/useFetchGames';
import GameCard from './GameCard';

function GameGrid() {
  const { games, error } = useFetchGames();

  if (error) {
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 stroke-current shrink-0"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>
    );
  }

  return (
    <div className="grid gap-4 px-4 md:gap-6 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4 grid-col-1 sm:grid-cols-2">
      {games.map((game) => {
        return <GameCard key={game.id} game={game} />;
      })}
    </div>
  );
}

export default GameGrid;
