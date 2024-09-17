import { useContext, useState } from 'react';
import { AppContext } from '../../../common/context/app-context';
import { useGetGamesQuery } from '../services/games.service';
import { Game } from '../types/games.types';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import NoGamesIcon from './NoGamesIcon';

function GameGrid() {
  const { genreSlug, platform, orderBy, searchText, order } = useContext(AppContext);

  const [page, setPage] = useState<number>(1);

  const {
    isError,
    data: games,
    isLoading,
    isFetching,
  } = useGetGamesQuery({ genreSlug, platform, orderBy, searchText, order, page });

  const gameCardSkeletonsCount = Array(7).fill(0);

  return (
    <div className="w-full h-full">
      <div className="grid gap-8 md:gap-7 md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 grid-col-1 sm:grid-cols-2 ">
        {(isLoading || isFetching) &&
          gameCardSkeletonsCount.map(() => {
            return <GameCardSkeleton key={Math.random()} />;
          })}

        {isError && <div>Error!</div>}

        {games?.results &&
          !isLoading &&
          !isFetching &&
          games?.results.map((game: Game) => {
            return <GameCard key={game.id} game={game} />;
          })}
      </div>
      {games?.results && games?.results.length <= 0 && <NoGamesIcon />}

      {/* <section className="grid w-auto grid-cols-2 mt-8 join">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="join-item btn btn-outline"
        >
          Previous page
        </button>
        <button
          disabled={games?.results.length <= 0 || games?.results.length < 12}
          onClick={() => setPage(page + 1)}
          className="join-item btn btn-outline"
        >
          Next
        </button>
      </section> */}
      <section className="flex justify-center gap-4 mt-8">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)} className="btn btn-primary">
          Prev
        </button>
        <button
          disabled={games?.results.length <= 0 || games?.results.length < 12}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default GameGrid;
