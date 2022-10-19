function searchReplace(str, word, newWord){
  // Using .replace()
    // if(word[0] === word[0].toUpperCase()) newWord = newWord[0].toUpperCase() + newWord.slice(1)
    // return str.replace(word, newWord)

  // Using regular expressions
    // let reGex = new RegExp(word, 'gi')
    // if(/[A-Z]/.test(word[0])) newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1)
    // return str.replace(reGex, newWord)

  
}

module.exports = searchReplace