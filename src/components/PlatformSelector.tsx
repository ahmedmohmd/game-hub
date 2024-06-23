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
  const { isError, data: platforms } = useGetPlatformsQuery({});

  if (isError) return null;

  return (
    <select
      className="w-full max-w-xs mb-8 bg-gray-100 dark:bg-neutral-900 select"
      onChange={(event) => handlePlatform(+event.target.value)}
    >
      <option disabled selected>
        Select Your Platform
      </option>

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
