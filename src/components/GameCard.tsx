import { Game } from '../hooks/useFetchGames';
import Carousel from './Carousel';
import PlatformsIcons from './PlatformsIcons';

interface Props {
  game: Game;
}

function getRandomNumber(min: number = 5000, max: number = 30000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GameCard({ game }: Props) {
  console.log(game.rating);

  return (
    <div className="duration-300 shadow-xl dark:text-white text-black group hover:scale-[1.05] card bg-base-100 relative rounded-xl flex overflow-hidden min-h-96 lg:h-72">
      <figure className="relative w-full h-full">
        {/* <div className="absolute bottom-0 left-0 z-10 w-full h-full transition-all duration-300 group-hover:-z-10 group-hover:opacity-0 from-white dark:from-black to-transparent bg-gradient-to-t"></div> */}
        <div className="absolute -bottom-24 group-hover:bottom-0 left-0 z-10 w-full h-[calc(100%+6rem)] transition-all duration-300 from-40%  from-white dark:from-black  to-transparent bg-gradient-to-t"></div>

        <Carousel interval={getRandomNumber()} screenshots={game.short_screenshots} />
        {/* 
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
        </div> */}
      </figure>
      <div className="absolute z-10 w-full p-6 overflow-auto transition-all duration-300 card-body -bottom-20 group-hover:bottom-0">
        <h2 className="card-title">{game.name}</h2>
        <PlatformsIcons platforms={game.parent_platforms} />
        <div className="relative flex items-center justify-start gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <div className="py-3 rounded-md p- badge badge-ghost">rating</div>
          <div className="flex gap-0.5 rating rating-sm">
            {Array(Math.round(game.rating))
              .fill(0)
              .map(() => {
                return <input type="text" className="bg-orange-400 mask mask-star-2" />;
              })}
          </div>
        </div>
        <div className="relative justify-end transition-all duration-300 opacity-0 group-hover:opacity-100 card-actions">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;

{
  /* <div className="overflow-hidden shadow-xl group card bg-base-100 image-full transition-all duration-300 hover:scale-[1.05] ">
      <figure>
        <div className="absolute bottom-0 left-0 z-10 w-full h-full transition-all duration-300 dark:group-hover:from-black/90 group-hover:from-65% group-hover:to-100% from-white dark:from-black to-transparent bg-gradient-to-t"></div>

        <img src={game.background_image} alt="Shoes" />
      </figure>
      <div className="relative transition-all duration-300 card-body -bottom-1/3 group-hover:bottom-0">
        <h2 className="card-title">Shoes!</h2>
        <p className="transition-all duration-300 opacity-0 group-hover:opacity-100">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="justify-end transition-all duration-300 opacity-0 card-actions group-hover:opacity-100">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div> */
}
// </div>
