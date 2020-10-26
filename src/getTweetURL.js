
let getTweetURL = (results) => {
  const tweet = results.data[0]
  const author = results.includes.users[0]

  /*
  console.log(tweet)
  console.log(author)
  */

  return `https://twitter.com/${author.username}/status/${tweet.id}`
}

module.exports = getTweetURL;
