import GameGrid from './components/GameGrid.tsx';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <div className="flex flex-col text-white">
      <NavBar />

      <div className="flex flex-row">
        <div className="hidden w-1/3 bg-yellow-500 aside lg:block">aside</div>
        <div className="flex-1 bg-red-500">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
