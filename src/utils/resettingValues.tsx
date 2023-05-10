import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { AddEditAlbumState } from '../interfaces/Props';

function resettingValues() {
 const [values, setValues] = useState<AddEditAlbumState>({
  singer: "",
  album: "",
  imageUrl: "",
  release: "",
  label: "",
  sales: "",
 });


 const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
 };

 return values;
}

export default resettingValues
