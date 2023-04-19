import { updateAlbum, getAlbumById } from "../../utils/data"
import { AddEditAlbumState } from "../../interfaces/Props"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { validateValues } from "../../utils/utilities";

function Edit() {
 const [values, setValues] = useState<AddEditAlbumState>({
  singer: "",
  album: "",
  imageUrl: "",
  release: "",
  label: "",
  sales: "",
 });
 const [error, setError] = useState(false);
 const navigate = useNavigate();

 const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  try {
   validateValues(values);
   updateAlbum(getAlbumById, values);
   navigate("/dashboard");
  } catch (err) {
   alert("Please fill out all input fields.")
   setError(true);
  }
 };

 return (
  <section id="edit">
   <div class="form">
    <h2>Edit Album</h2>
    <form class="edit-form">
     <input
      type="text"
      name="singer"
      id="album-singer"
      placeholder="Singer/Band"
      value=${albumById.singer}
     />
     <input
      type="text"
      name="album"
      id="album-album"
      placeholder="Album"
      value=${albumById.album}
     />
     <input
      type="text"
      name="imageUrl"
      id="album-img"
      placeholder="Image url"
      value=${albumById.imageUrl}
     />
     <input
      type="text"
      name="release"
      id="album-release"
      placeholder="Release date"
      value=${albumById.release}
     />
     <input
      type="text"
      name="label"
      id="album-label"
      placeholder="Label"
      value=${albumById.label}
     />
     <input
      type="text"
      name="sales"
      id="album-sales"
      placeholder="Sales"
      value=${albumById.sales}
     />

     <button type="submit">post</button>
    </form>
   </div>
  </section>
 )
}

export default Edit
