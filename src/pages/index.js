import * as React from 'react'
import { useState, useEffect } from 'react'
import { createWorker } from 'tesseract.js'


export default function IndexPage() {

  const [image, setImage] = useState(null);
  const [textResult, setTextResult] = useState("Hi")

  const worker = await createWorker('eng') // used to convert image to text

  function uploadHandler() {
    if (!image) {
      console.log('No file selected')
      return
    }
  }
  // imgToTxt: uses TesseractJS to convert image to text
  // parameters: 
  //    img: URL of png/jpg/jpeg
  async function imgToTxt(img) {
    const data = await worker.recognize(img)
  }

// new imgToTxt function

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
      <button onClick={() => {
        let text = imgToTxt(image)
        setTextResult(text)
        console.log(textResult)
        console.log(text)
      }}>Test</button>
      <br />
      <button onClick={()=>console.log(textResult)}>TextResult</button>
    </>
  )
}
