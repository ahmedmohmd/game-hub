import { Game } from '../types/games.types';
import Carousel from './Carousel';
import CriticScore from './CriticScore';
import PlatformsIcons from './PlatformsIcons';

interface Props {
  game: Game;
}

function GameCardV1({ game }: Props) {
  return (
    <>
      <div className="w-full group shadow-xl hover:scale-[1.05] transition-all duration-300 card bg-base-100 overflow-hidden min-h-96 max-h-[450px]">
        <figure className="w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={game.background_image || 'https://placehold.co/500x300?text=No+Image'}
            alt={game.name}
          />
        </figure>
        <div className="relative card-body dark:bg-neutral-900">
          <a
            href="#home"
            className="w-full mb-2 break-all truncate text-ellipsis text-wrap card-title hover:underline"
          >
            {game.name}
          </a>
          <div className="transition-all duration-300 group-hover:opacity-100">
            <PlatformsIcons platforms={game?.parent_platforms} />
          </div>
          {game.rating && Math.round(game.rating) > 0 && (
            <div className="relative flex items-center justify-start transition-all duration-300 group-hover:opacity-100">
              <div className="flex-1 rounded-md text-neutral-500 dark:text-neutral-300">
                Rating:
              </div>
              <div className="flex gap-0.5 rating rating-sm cursor-default">
                {Array(Math.round(game.rating))
                  .fill(0)
                  .map(() => {
                    return (
                      <input
                        key={Math.random()}
                        type="text"
                        className="bg-orange-400 cursor-default mask mask-star-2"
                      />
                    );
                  })}
              </div>
            </div>
          )}
          {game.released && (
            <div className="relative flex items-center justify-start gap-4 transition-all duration-300 group-hover:opacity-100">
              <div className="flex-1 text-neutral-500 dark:text-neutral-300">release date</div>
              <div className="text-neutral-700 dark:text-white">
                {new Intl.DateTimeFormat('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                }).format(new Date(game.released))}
              </div>
            </div>
          )}
          {game.metacritic && (
            <div className="relative flex items-center justify-start transition-all duration-300 group-hover:opacity-100">
              <div className="flex-1 text-neutral-500 dark:text-neutral-300">Score</div>
              <CriticScore score={game.metacritic} />
            </div>
          )}

          {/* <div className="justify-end card-actions">
            <button className="btn btn-primary">Read More</button>
          </div> */}
        </div>
      </div>

      {/* <div className="relative flex overflow-hidden text-black duration-300 shadow-xl dark:text-white group hover:-translate-y-4 card bg-base-100 rounded-xl min-h-96 max-h-[384px]">
        <div className="absolute -bottom-24 group-hover:bottom-0 left-0 z-10 w-full h-full transition-all duration-300 from-40%  from-white dark:from-black  to-transparent bg-gradient-to-t" />
        <figure className="relative w-full h-full overflow-hidden">
          <Carousel interval={getRandomNumber()} screenshots={game.short_screenshots} />
        </figure>
        <div className="absolute z-10 w-full p-6 overflow-hidden transition-all duration-300 card-body -bottom-36 group-hover:bottom-0">
          <h2 className="text-2xl font-bold card-title">{game.name}</h2>
          <div className="transition-all duration-300 opacity-0 group-hover:opacity-100">
            <PlatformsIcons platforms={game.parent_platforms} />
          </div>
          {game.rating && Math.round(game.rating) > 0 && (
            <div className="relative flex items-center justify-start transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="py-3 font-medium rounded-md badge badge-ghost">rating</div>
              <div className="flex gap-0.5 rating rating-sm cursor-default">
                {Array(Math.round(game.rating))
                  .fill(0)
                  .map(() => {
                    return (
                      <input
                        key={Math.random()}
                        type="text"
                        className="bg-orange-400 cursor-default mask mask-star-2"
                      />
                    );
                  })}
              </div>
            </div>
          )}
          {game.released && (
            <div className="relative flex items-center justify-start transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="py-3 font-medium rounded-md badge badge-ghost">release date</div>
              <div className="text-slate-400">{game.released?.split('-').reverse().join('/')}</div>
            </div>
          )}
          {game.metacritic && (
            <div className="relative flex items-center justify-start transition-all duration-300 opacity-0 group-hover:opacity-100">
              <div className="py-3 font-medium rounded-md badge badge-ghost">score</div>
              <CriticScore score={game.metacritic} />
            </div>
          )}
          <div className="relative justify-end transition-all duration-300 opacity-0 group-hover:opacity-100 card-actions">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default GameCardV1;
