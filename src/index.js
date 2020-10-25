const getTweets = require('./tweetFetcher');
const recognize = require('./recognizer')
const Tweetparser = require('./Tweetparser')
require('dotenv').config()

// let query='@eminO-17h british devs be like'
const query='(from:mariusoye) waiting for the fan—made coast to coast video some lunatic is going'
// let query='brann'


getTweets(query, (results) => {
  console.log(results)
})




recognize('./img/image5.png', (text) => {
  console.log(text)
  const tweetParser = new Tweetparser(text)

  const username = tweetParser.getUsername()

  console.log('username:', username)

  console.log('probableLines:', tweetParser.getProbableTextLines())

  const cleanedLines = tweetParser.getCleanedTextLines()
  console.log('getCleanedTextLines:', cleanedLines)

  const query = `(from:${username.replace('@', '')}) ${cleanedLines[0]}`
  console.log(query)

  getTweets(query, (results) => {
    console.log(results)
  })
})


/*
recognize('./img/image2.png', (text) => {
  console.log(text)
})
 */




