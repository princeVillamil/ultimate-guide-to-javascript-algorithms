/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
	// My solution
		// return text.split('').reverse().join('').toLowerCase() == text.toLowerCase()

	// An intuitive approach
		// let reversedText = text.toLowerCase().split('').reverse().join('')
		// return text == reversedText

	// Looping throught and comparing char
		// let charArray = text.toLowerCase().split('')
		// let result = charArray.every((letter, i)=>{
		// 	return letter === charArray[charArray.length - i - 1]
		// })
		// return result
	// Looping throught and comparing char W/Fix
		// let textLen = text.length
		// for(let i = 0; i < textLen/2; i++){
		// 	if(text[i] !== text[textLen - 1 - i]) return false
		// }
		// return true
}



module.exports = palindromeChecker;