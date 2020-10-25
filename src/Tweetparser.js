
class Tweetparser {
  constructor(text) {
    this.text = text
  }
  getUsername() {
    const n = this.text.search(/@[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*/)
    return this.text.slice(n).split(/(\s+)/)[0]
  }

  getProbableTextLines() {
    const textLines = this.text.split('\n')

    let usernameLineNumber;
    textLines.some((line, index) => {
      console.log(typeof line)
      if (line.includes(this.getUsername())) {
        console.log(index)
        usernameLineNumber = index;
        return true;
      }
    })

    console.log('usernameLineNumber:', usernameLineNumber)


    if (usernameLineNumber === undefined) {
      return []
    }

    const usernameLineRemoved = textLines.splice(usernameLineNumber + 1)
    console.log('removed username line:', usernameLineRemoved)
    return usernameLineRemoved
  }

  getCleanedTextLines() {
    const cleanedLines = this.getProbableTextLines().map(line => {
      const splitted = line.split(/(\s+)/)
      console.log('splitted:', splitted)
      return splitted.splice(1).join('').trim()
    })

    console.log('semicleaned lines:', cleanedLines)

    return cleanedLines.filter(line => {
      return line.length > 0
    })
  }

}



module.exports = Tweetparser;
