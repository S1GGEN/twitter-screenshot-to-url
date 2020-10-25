const getTweets = require('./tweetFetcher');
const recognize = require('./recognizer')
require('dotenv').config()

let query='brann'

/*
getTweets(query, (results) => {
  console.log(results)
})
 */


recognize('./img/image.png', (text) => {
  console.log(text)
})


