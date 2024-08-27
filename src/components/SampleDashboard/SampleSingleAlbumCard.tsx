import React from "react";
import { Album } from "./SampleDashAlbums";

// A sample of destructuring of props and typization ;)
const SampleSingleAlbumCard = ({ album }: { album: Album }) => {
  return <div>This is {album.name}</div>;
};

export default SampleSingleAlbumCard;
