import { useContext } from 'react';
import { AppContext } from '../../../common/context/app-context';
import { Genre } from '../types/genres.types';

interface Props {
  genre: Genre;
  isActive: boolean;
}

const GenreCard = ({ genre, isActive }: Props) => {
  const { handleGenreSlug } = useContext(AppContext);

  return (
    <button
      className={`flex items-center justify-start w-full gap-4 p-1 transition-all duration-200 rounded-2xl   hover:cursor-pointer hover:underline ${isActive && 'bg-gray-200 dark:bg-neutral-700/40 underline'}`}
      onClick={() => handleGenreSlug(genre.slug)}
    >
      <figure className="w-12 h-12 overflow-hidden rounded-xl">
        <img className="object-cover w-full h-full" src={genre.image_background} alt={genre.name} />
      </figure>
      <h3 className="font-normal">{genre.name}</h3>
    </button>
  );
};

export default GenreCard;
