import { GenresList } from "@/components/GenresList";
import { MovieCard } from "@/components/MovieCard";
import { MovieItemType } from "@/types";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const genresData = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
  );

  const res = await data.json();
  const { genres } = await genresData.json();

  return (
    <main>
      <GenresList genres={genres} />
      <div className="grid gap-16 grid-cols-fluid mx-16 ">
        {res.results.map((movie: MovieItemType) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </main>
  );
}
