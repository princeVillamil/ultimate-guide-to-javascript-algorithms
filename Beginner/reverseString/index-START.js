/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     // Code goes here method
//     return text.split('').reverse().join('')
// }
// function reverseString(text) {
//     return [...text].reverse().join('')
// }
// function reverseString(text) {
//     // Code goes here for loops
//     let reverseText = ''
//     for(let i = text.length-1; i >= 0 ; i--)reverseText += text[i]
//     return reverseText
// }
// function reverseString(text) {
//     // Code goes here recursve
//     if(text === '') return ''
//     else return reverseString(text.substr(1)) + text[0]
// }
function reverseString(text) {
    // Code goes here reduce
    return text.split('').reduce((acc,curr)=> curr+acc, '')
}



module.exports = reverseString