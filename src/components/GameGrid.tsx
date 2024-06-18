import { Game } from '../hooks/useFetchGames';
import { useGetGamesQuery } from '../services/games';
import GameCard from './GameCard';

function GameGrid() {
  const { isError, data: games, isLoading } = useGetGamesQuery({});

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col gap-4 w-52">
  //       <div className="w-full h-32 skeleton"></div>
  //       <div className="h-4 skeleton w-28"></div>
  //       <div className="w-full h-4 skeleton"></div>
  //       <div className="w-full h-4 skeleton"></div>
  //     </div>
  //   );
  // }
  // console.log(games);

  if (isError) {
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
    <div className="grid gap-8 px-4 md:px-8 md:gap-6 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 grid-col-1 sm:grid-cols-2">
      {isLoading &&
        [0, 0, 0, 0, 0, 0, 0].map(() => {
          return (
            <div className="flex flex-col gap-4 card xl:p-4">
              <div className="w-full h-48 bg-base-300 dark:bg-neutral-800/75 skeleton"></div>
              <div className="w-1/3 h-4 bg-base-300 dark:bg-neutral-800/75 skeleton"></div>
              <div className="w-full h-4 bg-base-300 dark:bg-neutral-800/75 skeleton"></div>
              <div className="w-full h-4 bg-base-300 dark:bg-neutral-800/75 skeleton"></div>
            </div>
          );
        })}

      {games &&
        games.results.map((game: Game) => {
          return <GameCard key={game.id} game={game} />;
        })}
    </div>
  );
}

export default GameGrid;
