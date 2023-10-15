import * as React from 'react'
import { useState, useEffect } from 'react'
import { imgToTxt } from './imgToTxt'

export default function IndexPage() {

  const [image, setImage] = useState(null);
  const [textResult, setTextResult] = useState("Hi")

  return (
    <>
      <h1>Image to Text</h1>
      <input
        type='file' 
        accept='image/jpeg, image/png, image/jpg'
        name='myImage'
        onChange={(e) => {

          if (e) {
            const uploadFile = URL.createObjectURL(e.target.files[0])
            console.log(uploadFile)
            setImage(uploadFile)
          }
        }}
      />
      <img src={image}></img>
      <p>Text: {textResult}</p>
      <button onClick={() => setImage(null)}>Remove</button>
      <br />
      <button onClick={async() => {
        const text = await imgToTxt(image, setTextResult)
        // NOTE: setTextResult is given as the parameter to imgToTxt as a callback function
        //       so it runs after the Tesseract worker is done processing
      }}>Test</button>
      <br />
      <button onClick={()=>console.log(textResult)}>TextResult</button>
    </>
  )
}
