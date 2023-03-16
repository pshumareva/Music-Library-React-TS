import React from "react";
import SampleSingleAlbumCard from "./SampleSingleAlbumCard";

export interface Album {
  id: number;
  name: string;
}

// This is an example of destructuring of props + typization of those
const SampleDashAlbums = ({ albums }: { albums: Album[] }) => {
  return (
    <div>
      {albums.map((album) => (
        // for each of the items we render an item card (further "specizlization" of components)
        <SampleSingleAlbumCard album={album} key={album.id} />
      ))}
    </div>
  );
};

export default SampleDashAlbums;
