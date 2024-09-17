import { createContext } from 'react';

interface IAppContext {
  genreSlug: string;
  handleGenreSlug: (genreSlug: string) => void;
  activeGenre: string;
  handlePlatform: (platform: number) => void;
  platform: number;
  handleOrdering: (orderBy: string) => void;
  orderBy: string;
  searchText: string;
  handleSearch: (searchText: string) => void;
  order: string;
  handleOrder: (order: string) => void;
}

export const AppContext = createContext<IAppContext>({
  genreSlug: '',
  handleGenreSlug: () => {},
  activeGenre: '',
  handlePlatform: () => {},
  platform: 0,
  handleOrdering: () => {},
  orderBy: '',
  searchText: '',
  handleSearch: () => {},
  order: '',
  handleOrder: () => {},
});
