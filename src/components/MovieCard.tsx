import { MovieItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const MovieCard = ({ movie }: { movie: MovieItemType }) => {
  const imagePrefix = "https://image.tmdb.org/t/p/original";
  return (
    <Link href={`/${movie.id}`}>
      <Image
        src={imagePrefix + movie.backdrop_path}
        width={500}
        height={500}
        alt={movie.title}
      />
      {movie.title}
    </Link>
  );
};
