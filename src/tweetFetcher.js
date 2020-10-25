// import fetch from 'node-fetch';
const fetch = require('node-fetch');
const { Headers } = require('node-fetch');

let getTweets = (query, callback) => {
    fetch(`https://api.twitter.com/2/tweets/search/recent?query=${query}`, {
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