import GameGrid from './components/GameGrid.tsx';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />

      <div className="relative flex flex-row ">
        <div className="fixed left-0 hidden w-1/6 h-[calc(100vh-105px)] mx-2 mt-4 bg-gray-50 dark:bg-neutral-900 rounded-3xl aside lg:block">
          aside
        </div>
        <div className="flex-1 lg:ml-[16.66666666666667%] mt-4">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
