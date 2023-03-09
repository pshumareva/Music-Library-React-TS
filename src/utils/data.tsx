import { apiBaseURL } from "./api";

// Functions here will be used to do all the api manipulations, no need to do useEffect here.
// useEffect is a hook and this is not a react component, this is a utility file
async function getData() {
  const response = await fetch(
    apiBaseURL + "/data/albums?sortBy=_createdOn%20desc"
  );
  const albums = await response.json();
  return albums;
}

export default getData;
