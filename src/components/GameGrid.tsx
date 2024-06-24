import { useContext } from 'react';
import { AppContext } from '../App';
import { useGetGamesQuery } from '../services/games.service';
import { Game } from '../types/games.types';
// import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardV1 from './GameCardV1';

function GameGrid() {
  const { genreSlug, platform, orderBy, searchText } = useContext(AppContext);
  const {
    isError,
    data: games,
    isLoading,
    isFetching,
  } = useGetGamesQuery({ genreSlug, platform, orderBy, searchText });

  const gameCardSkeletonsCount = Array(7).fill(0);

  return (
    <div className="grid gap-8 md:gap-7 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 grid-col-1 sm:grid-cols-2 ">
      {(isLoading || isFetching) &&
        gameCardSkeletonsCount.map(() => {
          return <GameCardSkeleton key={Math.random()} />;
        })}

      {isError && <div>Error!</div>}

      {games &&
        !isLoading &&
        !isFetching &&
        games.results.map((game: Game) => {
          return <GameCardV1 key={game.id} game={game} />;
          // return <GameCard key={game.id} game={game} />;
        })}
    </div>
  );
}

export default GameGrid;
