import React from "react";
import SampleDashAlbums from "./SampleDashAlbums";
import SampleDashNoAlbums from "./SampleDashNoAlbums";

const SampleDashboard = () => {
  // would be a call to the server
  const albums = [
    { id: 1, name: "Album 1" },
    { id: 2, name: "Album 2" },
    { id: 3, name: "Album 3" },
  ];

  // Return is based on the length of the albums coming from BE
  return albums.length > 0 ? (
    <SampleDashAlbums albums={albums} />
  ) : (
    <SampleDashNoAlbums />
  );
};

export default SampleDashboard;
