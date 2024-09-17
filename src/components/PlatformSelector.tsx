import { useContext } from 'react';
import { AppContext } from '../common/context/app-context';
import { useGetPlatformsQuery } from '../features/header/services/platforms.service';

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
      className="hidden bg-gray-100 border-none !outline-none md:block dark:bg-neutral-900 select hover:bg-gray-200 dark:hover:bg-neutral-950  transition-all duration-150 active:scale-[0.97]"
      onChange={(event) => handlePlatform(+event.target.value)}
      defaultValue="Select Your Platform"
    >
      <option disabled>Select Your Platform</option>

      <option value="">All</option>

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
