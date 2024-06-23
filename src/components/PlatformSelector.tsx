import { useContext } from 'react';
import { AppContext } from '../App';
import { useGetPlatformsQuery } from '../services/platforms.service';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const PlatformSelector = () => {
  const { handlePlatform } = useContext(AppContext);
  const { isError, isFetching, isLoading, data: platforms } = useGetPlatformsQuery({});

  if (isError) return null;

  return (
    <select
      disabled={isFetching || isLoading}
      className="w-full max-w-xs mb-8 bg-gray-100 dark:bg-neutral-900 select"
      onChange={(event) => handlePlatform(+event.target.value)}
    >
      {/* <option disabled selected>
        Pick your favorite Simpson
      </option> */}

      {platforms?.results.map((platform: Platform) => {
        return (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        );
      })}
    </select>
  );
};

export default PlatformSelector;
