import { createContext, useState } from 'react';
import DynamicHeader from './components/DynamicHeader.tsx';
import GameGrid from './components/GameGrid.tsx';
import GenresList from './components/GenresList.tsx';
import Input from './components/Input.tsx';
import NavBar from './components/NavBar.tsx';
import OrderingSelector from './components/OrderingSelector.tsx';
import PlatformSelector from './components/PlatformSelector.tsx';

interface AppContextType {
  genreSlug: string;
  handeGenreSlug: (genreSlug: string) => void;
  activeGenre: string;
  handlePlatform: (platform: number) => void;
  platform: number;
  handleOrdering: (orderBy: string) => void;
  orderBy: string;
  searchText: string;
  handleSearch: (searchText: string) => void;
}

export const AppContext = createContext<AppContextType>({
  genreSlug: '',
  handeGenreSlug: () => {},
  activeGenre: '',
  handlePlatform: () => {},
  platform: 0,
  handleOrdering: () => {},
  orderBy: '',
  searchText: '',
  handleSearch: () => {},
});

function App() {
  const [genreSlug, setGenreSlug] = useState<string>('');
  const [platform, setPlatform] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const handeGenreSlug = (slug: string) => {
    setGenreSlug(slug);
  };

  const handlePlatform = (platform: number) => {
    setPlatform(platform);
  };

  const handleOrdering = (orderBy: string) => {
    setOrderBy(orderBy);
  };

  const handleSearch = (searchText: string) => {
    console.log('handleSearch', searchText);

    setSearchText(searchText);
  };

  return (
    <AppContext.Provider
      value={{
        genreSlug,
        handeGenreSlug,
        activeGenre: genreSlug,
        handlePlatform,
        platform,
        orderBy,
        handleOrdering,
        searchText,
        handleSearch,
      }}
    >
      <div className="flex flex-col text-black dark:text-white scroll-bar-dark">
        <NavBar />

        <div className="relative flex flex-row">
          <div className="fixed left-0 hidden w-1/6   h-[calc(100vh-105px)] mx-2 mt-4  bg-base-100 px-2 aside xl:block overflow-auto">
            {/* <div className="fixed left-0 hidden w-1/6 h-[calc(100vh-105px)] mx-2 mt-4 bg-gray-50 dark:bg-neutral-900 rounded-3xl aside lg:block"> */}
            <div className="sticky top-0 p-2 pb-6 bg-white dark:bg-black">
              <h1 className="text-2xl font-semibold text-black dark:text-white">Genres</h1>
            </div>

            <GenresList />
          </div>
          <div className="px-4 md:px-8 flex-1 xl:ml-[16.66666666666667%] mb-6">
            <DynamicHeader genre={genreSlug} platform={platform} />

            <div className="flex justify-start w-full gap-4 mb-12 ">
              <div className="flex-1">
                <Input />
              </div>
              <PlatformSelector />
              <OrderingSelector />
            </div>
            <GameGrid />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
