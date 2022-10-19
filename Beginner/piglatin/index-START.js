function pigLatin(){
  // An Imperative Approach
    // Conver string to lowercase
    str = str.toLowerCase()
    // Init array of vowels
    const vowels = ["a", 'e', 'i', 'o', 'u']
    // Init vowels index to 0
    let vowelIndex = 0
    
    // If first letter is a vowel
    if(vowels.includes(str[0])) return str + 'way'
    // If the first letter isn't a vowel i.e is a consonant
    for(let char of str){
      // Loop throught until the first vowel is found
      if(vowels.includes(char)){
        // Store the index at which the first vowel exists
        vowelIndex = str.indexOf(char)
        break
      }
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
    }
    
}
module.exports = pigLatin