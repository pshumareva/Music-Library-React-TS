import { useEffect, useState } from "react";
import { AlbumDetails, AlbumInfo } from "../../interfaces/Props";
import { useParams } from "react-router-dom";
import { getAlbumById } from "../../utils/data";

function Details({ data }: AlbumInfo) {
  const [asset, setAsset] = useState<AlbumDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  // Getting album Id from the params (we're allowed to do this because of how react-router-dom works.)
  const { id } = useParams();

  // const ownerId = asset._ownerId
  // const userId = sessionStorage.userId

  useEffect(() => {
    const result =
      id &&
      getAlbumById(id).then((data) => {
        setAsset(data);
        setIsLoading(false);
      });
    const ownerId = asset._ownerId;
    const userId = sessionStorage.userId;
    if (ownerId === userId) {
      setIsOwner(true);
      console.log(isOwner);
    }
    // Setting isLoading as dependecy would ensure that once we are done loading (the asset has already been pulled and the owner Id is not undefined), we check for owner again (rerender)
  }, [isLoading]);

  console.log("isowner", isOwner);

  return (
    <section id="details" className="h-screen">
      {!isLoading && (
        <>
          <div
            id="details-wrapper"
            className="flex-reverse flex-wrap justify-center bg-white my-[50px] mx-auto min-h-[400px] max-w-[45%] border-2 shadow-[10px_10px_10px_10px_rgba(0,0,0,0.15)]"
          >
            <div>
              <p
                id="details-title"
                className="text-center font-bold text-[29px] w-full mb-[25px]"
              >
                Album Details
              </p>
              <div className="flex p-[15px]">
                <div id="img-wrapper" className="max-w-[35%]">
                  <img
                    src={asset.imageUrl}
                    className="w-full min-h-[250px] block"
                    alt="example1"
                  />
                </div>
                <div
                  id="info-wrapper"
                  className="dlex flex-wrap w-[55%] ml-[70px] h-[250px]"
                >
                  <p className="w-[90%] mt-[25px] h-auto text-center font-bold">
                    <strong>Band:</strong>
                    <span id="details-singer" className="float-right">
                      {asset.singer}
                    </span>
                  </p>
                  <p className="w-[90%] mt-[25px] h-auto text-center font-bold">
                    <strong>Album name:</strong>
                    <span id="details-album" className="float-right">
                      {asset.album}
                    </span>
                  </p>
                  <p className="w-[90%] mt-[25px] h-auto text-center font-bold">
                    <strong>Release date:</strong>
                    <span id="details-release" className="float-right">
                      {asset.release}
                    </span>
                  </p>
                  <p className="w-[90%] mt-[25px] h-auto text-center font-bold">
                    <strong>Label:</strong>
                    <span id="details-label" className="float-right">
                      {asset.label}
                    </span>
                  </p>
                  <p className="w-[90%] mt-[25px] h-auto text-center font-bold">
                    <strong>Sales:</strong>
                    <span id="details-sales" className="float-right">
                      {asset.sales}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {isOwner && (
              <div
                id="action-buttons"
                className="flex flex-wrap justify-center mt-[35px]"
              >
                <a
                  href=""
                  id="edit-btn"
                  className="no-underline mx-auto my-[50px] w-[130px] text-[21px] p-[10px] text-center text-black font-medium bg-[#CBF6FF] hover:shadow-[0_15px_15px_#7db9d7]"
                >
                  Edit
                </a>
                <a
                  href=""
                  className="no-underline mx-auto my-[50px] w-[130px] text-[21px] p-[10px] text-center text-black font-medium bg-[#CBF6FF] hover:shadow-[0_15px_15px_#7db9d7]"
                  id="delete-btn"
                >
                  Delete
                </a>
              </div>
            )}
            {/* <div id="likes" className="w-[95%] text-center mt-[35px] mb-[20px] font-bold text-[21px]">
            Likes: <span id="likes-count">0</span>
          </div> */}
          </div>
        </>
      )}
    </section>
  );
}

export default Details;
