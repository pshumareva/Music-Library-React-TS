import { apiBaseURL } from "./api";
import * as api from './api.js'

// Functions here will be used to do all the api manipulations, no need to do useEffect here.
// useEffect is a hook and this is not a react component, this is a utility file
async function getData() {
 const response = await fetch(
  apiBaseURL + "/data/albums?sortBy=_createdOn%20desc"
 );
 const albums = await response.json();
 return albums;
}

export async function createAlbum(album: any) {
 return await api.post(apiBaseURL + '/data/albums', album)
}

export async function getAlbumById(id: string) {
 return await api.get(apiBaseURL + '/data/albums/' + id)
}

export async function updateAlbum(id: string, album: any) {
 return await api.put(apiBaseURL + '/data/albums/' + id, album)
}

export async function deleteAlbum(id: string) {
 return await api.del(apiBaseURL + '/data/albums/' + id)
}

export const login = api.login
export const logout = api.logout

export default getData;
