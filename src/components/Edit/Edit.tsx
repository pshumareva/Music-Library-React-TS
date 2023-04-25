import { updateAlbum } from "../../utils/data"
import { AddEditAlbumState } from "../../interfaces/Props"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
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
 const { id } = useParams()

 const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  try {
   validateValues(values);
   updateAlbum(id, values);
   navigate("/dashboard");
  } catch (err) {
   alert("Please fill out all input fields.")
   setError(true);
  }
 };

 return (
  <section id="edit">
   <div className="bg-white max-w-[460px] m-auto mt-[100px] p-11 text-center font-black shadow-[15px_15px_rgba(0,0,0,0.15)]">
    <h2 className="mt-0 mb-[30px] text-[30px] italic">Edit Album</h2>
    <form className="edit-form" onSubmit={handleSubmit}>
     <input
      type="text"
      name="singer"
      id="album-singer"
      placeholder="Singer/Band"
      className="bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center"
      onChange={handleChange}
     />
     <input
      type="text"
      name="album"
      id="album-album"
      placeholder="Album"
      className="bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center"
      onChange={handleChange}
     />
     <input
      type="text"
      name="imageUrl"
      id="album-img"
      placeholder="Image url"
      className="bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center"
      onChange={handleChange}
     />
     <input
      type="text"
      name="release"
      id="album-release"
      placeholder="Release date"
      className="bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center"
      onChange={handleChange}
     />
     <input
      type="text"
      name="label"
      id="album-label"
      placeholder="Label"
      className="bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center"
      onChange={handleChange}
     />
     <input
      type="text"
      name="sales"
      id="album-sales"
      placeholder="Sales"
      className="bg-[#fafafa] w-[90%] h-[50px] border-0 mx-[15px] p-[15px] box-border text-sm text-center"
      onChange={handleChange}
     />
     <button
      type="submit"
      className="uppercase fw-bold bg-[#CBF6FF] w-[50%] border-0 p-[15px] text-black text-sm"
     >
      edit
     </button>
    </form>
   </div>
  </section>
 )
}

export default Edit
