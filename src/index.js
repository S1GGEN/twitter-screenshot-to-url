require('dotenv').config()
const open = require('open');

const getTweets = require('./tweetFetcher');
const recognize = require('./recognizer')
const Tweetparser = require('./Tweetparser')
const getTweetURL = require("./getTweetURL");


recognize('./img/image2.png', (text) => {
  console.log(text)

  const tweetParser = new Tweetparser(text)

  const username = tweetParser.getUsername()
  console.log('username:', username)

  const cleanedLines = tweetParser.getCleanedTextLines()
  console.log('getCleanedTextLines:', cleanedLines)

  const query = cleanedLines[0]

  // TODO: Toggle for using username in query (bad OCR on username + username in query will result in no results)
  getTweets(query, username,(results) => {
    // console.log(results)
    const tweetURL = getTweetURL(results)
    console.log('Opening', tweetURL)

    open(tweetURL).catch((e) => {
      console.error(e)
    })
  })
})




