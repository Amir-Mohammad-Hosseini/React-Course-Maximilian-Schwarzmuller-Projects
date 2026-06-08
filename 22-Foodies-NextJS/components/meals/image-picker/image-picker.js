"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null)
  const imageInputRef = useRef()


  const handleImageChange = (event) => {
    const file = event.target.files[0]

    if(!file){
      setPickedImage(null)
      return
    }
    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file)

  }


  const handlePickClick = () => {
imageInputRef.current.click()
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        
          <div className={classes.preview}>
            {!pickedImage && <p>No Image picked yet.</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill />}
          </div>
        
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
