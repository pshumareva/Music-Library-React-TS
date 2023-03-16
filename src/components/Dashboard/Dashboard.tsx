import getData from "../../utils/data";
import { useState, useEffect } from "react";
import { Album, Albums } from "../../interfaces/Props";
import PopulatedDashboard from "./PopulatedDashboard";
import EmptyDashboard from "./EmptyDashboard";

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
        assets.length > 0 ?
          <PopulatedDashboard assets={assets} /> :
          <EmptyDashboard />
      )}
    </div>
  );
}

export default Dashboard;
