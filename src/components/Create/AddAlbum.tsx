import { createAlbum } from "../../utils/data";
import { useState } from "react";

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

  // Adding a handleChange function, so we can set the state each time the value changes.
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValues({ ...values, ...formData });
    // when we use useState, we don't need to set the values to another variable, the first one from out useState is the value, so values can already be used
    console.log(values);
    createAlbum(values);

    setValues({
      singer: "",
      album: "",
      imageUrl: "",
      release: "",
      label: "",
      sales: "",
    });
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
