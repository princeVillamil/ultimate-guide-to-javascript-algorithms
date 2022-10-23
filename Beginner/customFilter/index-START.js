/*
Return the first element from the given array that 
passes the test specified by the provided function. 
Both the array and function are passed into the 
function as arguments as shown below:

arrayFilter(arr, func)
*/

function arrayFilter(arr, func) {
  // Imperative Approach
    // for(let element of arr){
    //   // Using if-statement we perform the test by passing the current element
    //   if(func(element)){
    //     return element
    //   }
    // }
    // return undefined
    
  // Using filter
    // let filteredArray = arr.filter(func)
    // return filteredArray[0] ? filteredArray[0] : undefined

  // Using .find()
  return arr.find(func)
}

module.exports = arrayFilter