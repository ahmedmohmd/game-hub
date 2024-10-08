import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AppContext } from './common/context/app-context.ts';
import NavBar from './components/NavBar/NavBar.tsx';
import GamePage from './pages/Game.tsx';
import HomePage from './pages/Home.tsx';

function App() {
  const [genreSlug, setGenreSlug] = useState<string>('');
  const [platform, setPlatform] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  const [order, setOrder] = useState<string>('asc');

  const handleGenreSlug = (slug: string) => {
    setGenreSlug(slug);
  };

  const handlePlatform = (platform: number) => {
    setPlatform(platform);
  };

  const handleOrdering = (orderBy: string) => {
    setOrderBy(orderBy);
  };

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
  };

  const handleOrder = (order: string) => {
    setOrder(order);
  };

  const contextValue = {
    genreSlug,
    handleGenreSlug,
    activeGenre: genreSlug,
    handlePlatform,
    platform,
    orderBy,
    handleOrdering,
    searchText,
    handleSearch,
    order,
    handleOrder,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <div className="flex flex-col text-black dark:text-white scroll-bar-dark">
          <NavBar />

          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="/games/:id" element={<GamePage />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
