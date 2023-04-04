import React from "react";

export const GenresList = ({
  genres,
}: {
  genres: { id: number; name: string }[];
}) => {
  return (
    <div className="flex gap-5 whitespace-nowrap p-5 overflow-x-auto">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="p-2 cursor-pointer bg-slate-400 text-white rounded-md hover:bg-slate-500"
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};
