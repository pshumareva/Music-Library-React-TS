import getAlbumById from "../../utils/data";
import { useEffect, useState } from "react";
import { AlbumDetails, AlbumInfo } from "../../interfaces/Props";


function Details({ data }: AlbumInfo) {
 const [asset, setAsset] = useState<AlbumDetails[]>([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const result = getAlbumById().then((data) => {
   setAsset(data);
   setIsLoading(false);
  });
 }, []);

 console.log(asset, 'asset')
 return (
  <section id="details">
   <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
     <img src={asset.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
     {/* <p>
      <strong>Band:</strong
      ><span id="details-singer">${albumById.singer}</span>
     </p>
     <p>
      <strong>Album name:</strong
      ><span id="details-album">${albumById.album}</span>
     </p>
     <p>
      <strong>Release date:</strong
      ><span id="details-release">${albumById.release}</span>
     </p>
     <p>
      <strong>Label:</strong
      ><span id="details-label">${albumById.label}</span>
     </p>
     <p>
      <strong>Sales:</strong
      ><span id="details-sales">${albumById.sales}</span>
     </p> */}
    </div>
    <div id="likes">Likes: <span id="likes-count">0</span></div>

   </div>
  </section>
 )
}

export default Details
