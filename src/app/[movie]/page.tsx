import { Rating } from "@/components/shared/Rating";
import { MovieDetailsType } from "@/types";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";

const Movie = async ({ params }: { params: any }) => {
  const imagePrefix = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const movie: MovieDetailsType = await data.json();

  return (
    <div className="p-5">
      <div className="flex justify-between items-center sticky top-0 bg-white">
        <h1 className="text-2xl my-5">{movie?.title}</h1>
        <div>
          <Rating />
        </div>
      </div>
      <Image
        src={imagePrefix + movie.backdrop_path}
        width={1000}
        height={1000}
        className="w-full"
        alt="movie-poster"
      />
      <p className="p-4 bg-slate-300 rounded-lg my-5">
        Overview: {movie.overview}
      </p>
    </div>
  );
};

export default Movie;
