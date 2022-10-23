/*
  Given an integer, return an integer that has the 
  reverse ordering of that which was received. E.g
  reverseInteger(-123) // should return -321

  The signs must not change i.e -123 becomes -321
  The value returned must be an integer.
  All insignificant zeroes must be removed i.e 900 becomes 9 and not 009

*/
function reverseInteger(num){
  // return [...`${text}`].reduce((acc, curr)=> curr+acc, '')

  // Convert int to a string
  function reverseString(text) {
    return [...text].reduce((acc,curr)=> curr + acc, '')
  }
  let reverseString = reverseString(num.toString())
  let reverseNumber = parseInt(reverseString)
  return (reverseNumber * Math.sign(num))


}
// Pratical application
/*
This challenge is simply a variation of the string reversal challenge 
and may be used to test an understanding of JS in coding interviews
*/

module.exports = reverseInteger