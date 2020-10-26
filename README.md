# twitter-screenshot-to-url

Works sometimes. When it works it gives you the corresponding URL to the tweet screenshot you fed it.

## Prerequisites:

Requires [Tesseract OCR](https://github.com/tesseract-ocr/tesseract).

Requires Twitter API Bearer token in .env. [Apply here](https://developer.twitter.com/content/developer-twitter/en/apply-for-access).

.env file (located in project root):
```env
BEARER_TOKEN=<YOU-BEARER-TOKEN>
```

## Use:

`npm start`

## Limitations:

- The free Twitter API level only includes the "recent search" API, which only returns tweets from the last seven days.

- The OCR is not reliable, especially not on low-res screenshots. Please use super high-res screenshots only.

- Uses an incredible naive approach for parsing the OCR output.
 
 - Spaghetti code.
 