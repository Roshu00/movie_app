export type MovieItemType = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export interface MovieDetailsType {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: { [key: string]: any } | null;
  budget?: number;
  genres?: { [key: string]: any }[];
  id?: number;
  name?: string;
  homepage?: string | null;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries?: { [key: string]: any }[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: { [key: string]: any }[];
  status?:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
