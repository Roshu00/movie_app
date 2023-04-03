import { MovieCard } from "@/components/MovieCard";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  console.log(res);

  return (
    <main>
      <h1>Hello world</h1>
      {res.results.map((movie: { title: string; backdrop_path: string }) => (
        <MovieCard movie={movie} />
      ))}
    </main>
  );
}
