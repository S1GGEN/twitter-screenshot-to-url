
class Tweetparser {
  constructor(text) {
    this.text = text
  }
  getUsername() {
    const n = this.text.search(/@[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*/)
    return this.text.slice(n).split(/(\s+)/)[0]
  }

  getTextLines() {
    return this.text.split('\n');
  }

  getUserNameLineNumber() {
    const textLines = this.getTextLines()

    for( let i=0; i < textLines.length; i++) {
        if (textLines[i].includes(this.getUsername())) {
          return i;
        }
    }
  }

  getProbableTextLines() {
    const textLines = this.getTextLines()

    const usernameLineNumber = this.getUserNameLineNumber()

    if (usernameLineNumber === undefined) {
      return []
    }

    // TODO: Sometimes (image6.png) the OCR spits out lines in the wrong order, and the following code results in no remaining lines
    // console.log('textLines:', textLines)
    const usernameLineRemoved = textLines.splice(usernameLineNumber + 1)
    // console.log('texLines after removal:', usernameLineRemoved)
    return usernameLineRemoved
  }

  getCleanedTextLines() {
    const cleanedLines = this.getProbableTextLines().map(line => {
      const splitted = line.split(/(\s+)/)
      return splitted.splice(1).join('').trim()
    })

    return cleanedLines.filter(line => {
      return line.length > 0
    })
  }
}



module.exports = Tweetparser;
