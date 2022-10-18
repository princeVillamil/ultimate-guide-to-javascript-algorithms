/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const Vowels = ["a", "e", "i", "o", "u"]

function vowelsCounter(text) {
    // Code goes here - Iteratives
    // let counter = 0
    // for(let letter of text.toLowerCase()){
    //     if(Vowels.includes(letter)) counter++
    // }
    // return counter

    // Code goes here - REgex
    // 88% faster than the iterative approach to solving this problem
    // let matchingInstances = text.match(/[aeiou]/gi)
    // if(matchingInstances) return matchingInstances.length
    // else return 0
}



module.exports = vowelsCounter;
