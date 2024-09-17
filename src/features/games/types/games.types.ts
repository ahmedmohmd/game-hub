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
  rating: number;
  released: string;
  metacritic: number;
  description_raw?: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}
