import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { FetchGamesResponse, Game } from '../types/games.types';

function useFetchGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const doFetchGames = async () => {
      const controller = new AbortController();

      try {
        const { data } = await apiClient.get<FetchGamesResponse>('/games', {
          signal: controller.signal,
        });
        setGames(data.results || []);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      }

      return () => controller.abort();
    };

    doFetchGames();
  }, []);

  return { games, error };
}

export default useFetchGames;
