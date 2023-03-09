import { useEffect } from "react"



function getData() {
 useEffect(() => {
  const response = fetch(host + '/data/albums?sortBy=_createdOn%20desc')
  const albums = response.json()
  return albums
 }, [])

}

export default getData
