import configs from '../../../../config/config';
import PlatformsIcons from '../../../components/PlatformsIcons';
import { Game } from '../types/games.types';
import GameRating from './GameRating';
import GameRelease from './GameRelease';
import GameScore from './GameScore';

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <article className="w-full group shadow-xl hover:scale-[1.05] transition-all duration-300 card bg-base-100 overflow-hidden min-h-96 max-h-[450px]">
      <figure className="w-full h-full">
        <img
          className="object-cover w-full h-full"
          src={game.background_image || configs.placeholderImage}
          alt={game.name}
        />
      </figure>
      <div className="relative card-body dark:bg-neutral-900">
        <a
          href={`/games/${game.id}`}
          target="_blank"
          className="w-full mb-2 break-all truncate text-ellipsis text-wrap card-title hover:underline"
        >
          {game.name}
        </a>
        <section className="transition-all duration-300 group-hover:opacity-100">
          <PlatformsIcons platforms={game?.parent_platforms} />
        </section>

        {game.rating && Math.round(game.rating) > 0 && <GameRating rating={game.rating} />}

        {game.released && <GameRelease released={game.released} />}

        {game.metacritic && <GameScore metacritic={game.metacritic} />}
      </div>
    </article>
  );
}

export default GameCard;
