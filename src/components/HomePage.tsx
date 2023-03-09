import { useEffect, useState } from "react";
import getData from "../utils/data";

function HomePage() {
  //Initiate a state variable that will receive data
  const [assets, setAssets] = useState([]);

  // It is a good practice to have a loading state
  const [isLoading, setIsLoading] = useState(true);

  // Call the fetching function inside the useEffect and set the component state
  useEffect(() => {
    // Not a good practice to make useEffect callback async, so getData is async, but we're calling it here and working with the returned promise
    const result = getData().then((data) => {
      setAssets(data);
      setIsLoading(false);
    });
  }, []);

  console.log(assets);
  return (
    <>
      <section id="home" className="mt-20 h-screen">
        <img
          src="../../images/landing.png"
          alt="home"
          className="italic block m-auto h-[33%] w-[33%] bg-transparent"
        />
        <h2
          id="landing-text"
          className="italic text-[27px] text-[rgb(68, 67, 67)] text-center"
        >
          <span className="normal mt-6 font-bold text-[25px]">
            Add your favourite albums
          </span>{" "}
          <strong>||</strong>
          <span className="normal mt-6 font-bold text-[25px]">
            Discover new ones right here!
          </span>
        </h2>
        {/* Make sure to have a Loading state vs a Loaded state indicator in the JSX */}
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <h1>Trial</h1>
            {assets.map((asset) => {
              // Notice the TS errors ? Hint: Assets have to be typed ;)
              return <h2 key={asset._id}>{asset.singer}</h2>;
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default HomePage;
