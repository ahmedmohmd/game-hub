import { Game } from '../types/games.types';
import Carousel from './Carousel';
import CriticScore from './CriticScore';
import PlatformsIcons from './PlatformsIcons';

interface Props {
  game: Game;
}

function getRandomNumber(min: number = 5000, max: number = 30000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GameCard({ game }: Props) {
  return (
    <div className="relative flex overflow-hidden text-black duration-300 shadow-xl dark:text-white group hover:-translate-y-4 card bg-base-100 rounded-xl min-h-96 max-h-[384px]">
      <div className="absolute -bottom-24 group-hover:bottom-0 left-0 z-10 w-full h-full transition-all duration-300 from-40%  from-white dark:from-black  to-transparent bg-gradient-to-t" />
      <figure className="relative w-full h-full overflow-hidden">
        <Carousel interval={getRandomNumber()} screenshots={game.short_screenshots} />
      </figure>
      <div className="absolute z-10 w-full p-6 overflow-hidden transition-all duration-300 card-body -bottom-36 group-hover:bottom-0">
        <h2 className="text-2xl font-bold card-title">{game.name}</h2>
        {/* <p>this is a hort description about image.</p> */}
        <div className="transition-all duration-300 opacity-0 group-hover:opacity-100">
          <PlatformsIcons platforms={game.parent_platforms} />
        </div>
        <div className="relative flex items-center justify-start gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
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
        <div className="relative flex items-center justify-start gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="py-3 font-medium rounded-md badge badge-ghost">release date</div>
          <div className="text-slate-400">{game.released.split('-').reverse().join('/')}</div>
        </div>
        {game.metacritic && (
          <div className="relative flex items-center justify-start gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
            <div className="py-3 font-medium rounded-md badge badge-ghost">score</div>
            <CriticScore score={game.metacritic} />
          </div>
        )}
        <div className="relative justify-end transition-all duration-300 opacity-0 group-hover:opacity-100 card-actions">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
