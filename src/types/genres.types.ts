export interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
  slug: string;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
