import React from "react";
import getData from "../../utils/data";
import { useState, useEffect } from "react";
import { Album, Albums } from "../../interfaces/Props";
import PopulatedDashboard from "./PopulatedDashboard";

function Dashboard({ data }: Albums) {
  const [assets, setAssets] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const result = getData().then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {/* {assets.map((asset) => {
            // Notice the TS errors ? Hint: Assets have to be typed ;)
            return (
              <>
                <li className="card">
                  <img src={asset.imageUrl} alt="travis" />
                  <p>
                    <strong>Singer/Band: </strong>
                    <span className="singer">{asset.singer}</span>
                  </p>
                  <p>
                    <strong>Album name: </strong>
                    <span className="album">{asset.album}</span>
                  </p>
                  <p>
                    <strong>Sales:</strong>
                    <span className="sales">{asset.sales}</span>
                  </p>
                  <a className="details-btn" id={asset._id}>
                    Details
                  </a>
                </li>
              </>
            );
          })} */}
          <PopulatedDashboard props={assets} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
