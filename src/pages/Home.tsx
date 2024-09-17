import { useContext } from 'react';
import { AppContext } from '../common/context/app-context';
import DynamicHeader from '../components/DynamicHeader';
import Input from '../components/Input';
import OrderingSelector from '../components/OrderingSelector';
import OrderInput from '../components/OrderINput';
import PlatformSelector from '../components/PlatformSelector';
import GameGrid from '../features/games/components/GameGrid';
import GenresList from '../features/genres/components/GenresList';

const HomePage = () => {
  const { genreSlug, platform } = useContext(AppContext);

  return (
    <div className="relative flex flex-row">
      <div className="fixed left-0 hidden w-[13%]   h-[calc(100vh-105px)] mx-2  mt-4   bg-base-100 px-2 aside xl:block overflow-auto">
        <div className="sticky top-0 p-2 pb-6 mb-2 bg-white dark:bg-black">
          <h1 className="text-2xl font-semibold text-black dark:text-white">Genres</h1>
        </div>

        <GenresList />
      </div>
      <div className="px-4 h-full  md:px-8 flex-1 xl:ml-[16.66666666666667%] mb-6">
        <DynamicHeader genre={genreSlug} platform={platform} />

        <div className="flex justify-start w-full h-full gap-4 mb-12 ">
          <div className="flex-1">
            <Input />
          </div>
          <PlatformSelector />
          <OrderingSelector />
          <OrderInput />
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default HomePage;
