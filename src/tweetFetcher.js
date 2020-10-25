// import fetch from 'node-fetch';
const fetch = require('node-fetch');
const { Headers } = require('node-fetch');
var encodeUrl = require('encodeurl')

let getTweets = (query, callback) => {
  const urlEncoded = `https://api.twitter.com/2/tweets/search/recent?query=${encodeUrl(query)}`;
  console.log('urlEncoded:', urlEncoded);
    fetch(urlEncoded, {
      method: 'get',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.BEARER_TOKEN}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        callback(jsonResponse)
      })
    ;
  }

module.exports = getTweets;