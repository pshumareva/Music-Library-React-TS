import { AddAlbumState } from "../interfaces/Props";

export function validateValues(values: AddAlbumState) {
 debugger
 for (let value in values) {
  // We take in each value, so everything that's been input for the singer/album/image etc.
  const inputValue = values[value as keyof AddAlbumState];
  if (inputValue === "") {
   // if any of those values is an empty string, we console log the key for which this value is.
   // we could throw an error/ console.error the error or simply do a setState to set an error
   throw `Please fill out all input fields. ${value} field is empty`

  }
 }
}