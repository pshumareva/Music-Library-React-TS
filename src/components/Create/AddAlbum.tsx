import { createAlbum } from "../../utils/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

// Invalid hook call is caused by calling useState outside the component.

function AddAlbum() {
 // always call hooks INSIDE the component function
 const [values, setValues] = useState({
  singer: "",
  album: "",
  imageUrl: "",
  release: "",
  label: "",
  sales: "",
 });
 let [valid, setValid] = useState(false)
 const navigate = useNavigate()

 // Adding a handleChange function, so we can set the state each time the value changes.
 const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  // setValues({ ...values, ...formData });
  // when we use useState, we don't need to set the values to another variable, the first one from out useState is the value, so values can already be used
  // if (values.singer === "" ||
  //  values.album === "" ||
  //  values.imageUrl === "" ||
  //  values.release === "" ||
  //  values.label === "" ||
  //  values.sales === "") {
  //  createAlbum(values);
  // }

  // for (const property in values) {
  //  if (values[property] !== "" && values[property] !== null) {
  //   console.log(values[property])
  //   setValid(true)
  //   console.log('inside', valid)
  //  } else {
  //   setValid(false)
  //  }
  // }
  // console.log('outside', valid)


  const checkInput = Object.values(values).every(value => {
   console.log("value", value)
   if (value !== "") {
    setValid(true)
   } else {
    setValid(false)
   }
  })

  console.log("check", checkInput, "valid", valid)

  if (valid) {
   createAlbum(values)
  } else {
   alert("problem")
  }

  setValues({
   singer: "",
   album: "",
   imageUrl: "",
   release: "",
   label: "",
   sales: "",
  });
  navigate("/dashboard")
 };

 return (
  <section id="create">
   <div className="bg-white max-w-[460px] m-auto mt-[100px] p-11 text-center font-black shadow-[15px_15px_rgba(0,0,0,0.15)]">
    <h2 className="mt-0 mb-[30px] text-[30px] italic">Add Album</h2>
    <form className="create-form" onSubmit={handleSubmit}>
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

     {/* When using forms, put an onSubmit handler directly to the form, instead of an onclick Event to the button */}
     <button
      type="submit"
      className="uppercase fw-bold bg-[#CBF6FF] w-[50%] border-0 p-[15px] text-black text-sm"
     >
      post
     </button>
    </form>
   </div>
  </section>
 );
}

export default AddAlbum;
