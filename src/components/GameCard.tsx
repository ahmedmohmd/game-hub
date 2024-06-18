import { Game } from '../hooks/useFetchGames';
import PlatformsIcons from './PlatformsIcons';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div className="duration-300 shadow-xl group hover:scale-[1.05] card bg-base-100">
      <figure className="relative w-full h-full">
        <div className="absolute bottom-0 left-0 z-10 w-full h-full transition-all duration-300 group-hover:-z-10 group-hover:opacity-0 from-white dark:from-black to-transparent bg-gradient-to-t"></div>

        <div className="relative z-0 w-full h-full carousel">
          {game.short_screenshots.map((screenshot) => {
            return (
              <div className="w-full carousel-item">
                <img
                  src={screenshot.image}
                  className="object-cover w-full h-full"
                  alt={game.name}
                />
              </div>
            );
          })}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{game.name}</h2>
        <PlatformsIcons platforms={game.parent_platforms} />
        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary ">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
}

export default GameCard;
