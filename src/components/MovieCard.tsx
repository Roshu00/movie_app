import Image from "next/image";
import React from "react";

export const MovieCard = ({
  movie,
}: {
  movie: { title: string; backdrop_path: string };
}) => {
  const imagePrefix = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image
        src={imagePrefix + movie.backdrop_path}
        width={500}
        height={500}
        alt={movie.title}
      />
      {movie.title}
    </div>
  );
};
