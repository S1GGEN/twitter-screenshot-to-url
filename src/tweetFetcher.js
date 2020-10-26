// import fetch from 'node-fetch';
const jsesc = require('jsesc');

const fetch = require('node-fetch');
const { Headers } = require('node-fetch');

let getTweets = (query, username, callback) => {
  const finalQuery = getFinalQuery(query, username)

  const url = `https://api.twitter.com/2/tweets/search/recent?query=${finalQuery}&user.fields=username&expansions=author_id`;
  console.log('url:', url);
  fetch(url, {
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

let escapeQuery = (query) => {
  console.log(query)
  console.log(query.replace('(', ''))
  const removedBrackets = query
      .replace(/\)/g, '')
      .replace(/\(/g, '')
      .replace(/;/g, '')
  return jsesc(removedBrackets, {quotes: 'double'})
}

let getFinalQuery = (query, username) => {
  const escapedQuery = escapeQuery(query)

   if (username && username.length > 0) {
     return `(from:${username.replace('@', '')}) ${escapedQuery}`
   }

   return escapedQuery

}

module.exports = getTweets;