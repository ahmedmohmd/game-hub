import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Platform {
  platform: {
    slug: string;
  };
}

export interface ScreenShot {
  image: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  short_screenshots: ScreenShot[];
  parent_platforms: Platform[];
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

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
        console.log(data.results || []);

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
