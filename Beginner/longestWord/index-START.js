/* CHALLENGE
Given a sentence, return the longest word in the string. 
E.g longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'
*/



function longestWord(text) {
    // Using a for-loop
        // let wordArray = text.split(' ')
        // let maxLength = 0
        // let result = ''
        // for(let i = 0;  i<wordArray.length; i++){
        //     if(wordArray[i].length > maxLength){
        //         maxLength = wordArray[i].length
        //         result = wordArray[i]
        //     }
        // }
        // return result

    // Reducing
        // let result = text.split(' ').reduce((maxLengthWord, currentWord)=>{
        //     if(currentWord.length > maxLengthWord.length){
        //         return currentWord
        //     }else{
        //         return maxLengthWord
        //     }
        // }, '')
        // return result

    // Using sort()
        let sortedArray = text.split(' ').sort((wordA, wordZ)=> wordZ.length - wordA.length)
        return sortedArray[0]
}


module.exports = longestWord