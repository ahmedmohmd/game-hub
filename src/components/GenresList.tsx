import { useContext } from 'react';
import { AppContext } from '../App';
import { useGetGenresQuery } from '../services/genres.service';
import { Genre } from '../types/genres.types';
import GenreCard from './GenreCard';
import GenreCardSkeleton from './GenreCardSkeleton';

const GenresList = () => {
  const { isError, isLoading, data: genres, isFetching } = useGetGenresQuery({});
  const { activeGenre } = useContext(AppContext);

  const genreCardSkeletonsCount = Array(5).fill(0);

  return (
    <div className="flex flex-col justify-start w-full gap-2">
      {(isLoading || isFetching) &&
        genreCardSkeletonsCount.map(() => <GenreCardSkeleton key={Math.random()} />)}

      {isError && <div>Error!</div>}

      {genres?.results.map((genre: Genre) => (
        <GenreCard isActive={activeGenre === genre.slug} key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default GenresList;
