import { createWorker } from 'tesseract.js'

  // imgToTxt: uses TesseractJS to convert image to text
  // parameters: 
  //    img: URL of png/jpg/jpeg

async function imgToTxt(img, callback) {
  const worker = await createWorker('eng') // used to convert image to text
  const output = await worker.recognize(img)
  const result = output.data.text // text generated from image

  await worker.terminate()
  callback(result)
  return result
}