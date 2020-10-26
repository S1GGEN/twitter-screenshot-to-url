require('dotenv').config()
const open = require('open');

const getTweets = require('./tweetFetcher');
const recognize = require('./recognizer')
const Tweetparser = require('./Tweetparser')
const getTweetURL = require("./getTweetURL");


// let query='@eminO-17h british devs be like'
const query='(from:casey) filmmaker, editor, youtuber friends'
/*

getTweets(query, (results) => {
  console.log(results)
})
 */


recognize('./img/image2.png', (text) => {
  console.log(text)

  const tweetParser = new Tweetparser(text)

  const username = tweetParser.getUsername()
  console.log('username:', username)

  const cleanedLines = tweetParser.getCleanedTextLines()
  console.log('getCleanedTextLines:', cleanedLines)

  const query = cleanedLines[0]

  getTweets(query, '',(results) => {
    // console.log(results)
    const tweetURL = getTweetURL(results)
    console.log('Opening', tweetURL)

    open(tweetURL).catch((e) => {
      console.error(e)
    })
  })
})



/*
recognize('./img/image2.png', (text) => {
  console.log(text)
})
 */




