const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

let recognize = (filename, callback) => {
  tesseract.recognize(filename, config)
    .then(text => {
      callback(text)
    })
    .catch(error => {
      console.log(error.message)
    })
}

module.exports = recognize;
