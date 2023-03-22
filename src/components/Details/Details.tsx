import { useEffect, useState } from "react";
import { AlbumDetails, AlbumInfo } from "../../interfaces/Props";
import { useParams } from "react-router-dom";
import { getAlbumById } from "../../utils/data";

function Details({ data }: AlbumInfo) {
  const [asset, setAsset] = useState<AlbumDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // Getting album Id from the params (we're allowed to do this because of how react-router-dom works.)
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const result =
      id &&
      getAlbumById(id).then((data) => {
        setAsset(data);
        setIsLoading(false);
      });
  }, []);

  console.log(asset, "asset");
  return (
    <section id="details">
      {!isLoading && (
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src={asset.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p>
              <strong>Band:</strong>
              <span id="details-singer">${asset.singer}</span>
            </p>
            <p>
              <strong>Album name:</strong>
              <span id="details-album">${asset.album}</span>
            </p>
            <p>
              <strong>Release date:</strong>
              <span id="details-release">${asset.release}</span>
            </p>
            <p>
              <strong>Label:</strong>
              <span id="details-label">${asset.label}</span>
            </p>
            <p>
              <strong>Sales:</strong>
              <span id="details-sales">${asset.sales}</span>
            </p>
          </div>
          <div id="likes">
            Likes: <span id="likes-count">0</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Details;
