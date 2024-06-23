import { useContext } from 'react';
import { AppContext } from '../App';
import { Genre } from '../types/genres.types';

interface Props {
  genre: Genre;
  isActive: boolean;
}

const GenreCard = ({ genre, isActive }: Props) => {
  const { handeGenreSlug } = useContext(AppContext);

  return (
    <button
      className={`flex items-center justify-start w-full gap-4 p-1 transition-all duration-200 rounded-2xl dark:hover:bg-neutral-700/40 hover:bg-gray-200 hover:cursor-pointer hover:underline ${isActive && 'bg-gray-200 dark:bg-neutral-700/40 underline'}`}
      onClick={() => handeGenreSlug(genre.slug)}
    >
      <div className="w-16 h-16 overflow-hidden rounded-2xl">
        <img className="object-cover w-full h-full" src={genre.image_background} alt={genre.name} />
      </div>
      <h3 className="font-normal">{genre.name}</h3>
    </button>
  );
};

export default GenreCard;
