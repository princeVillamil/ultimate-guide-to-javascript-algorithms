/*
Given an array of two numbers, return the cummulative sum of 
the two numbers and all the numbers between them. E.g

rangeSum([1,9]) 
// Should return 45 i.e 1+2+3+4+5+6+7+8+9
*/

function rangeSum(arr){
  // Using for loop
    // let sum = 0
    // for(let i = arr[0]; i<= arr[1]; i++){
    //   sum += i
    // }
    // return sum

  // Using the arithmetic progression formula
    /*
      arithmetic progression (AP) or arithmetic sequence is a 
      sequence of numbers ordered such that the difference between 
      the consecutive terms is constant. This simply means, a list of 
      numbers where the difference between each number and the next is 
      always the same. Notice that in a range as shown below, this 
      applies.
    */
    // return ((arr[1] - arr[0] +1) * (arr[0] + arr[1])) / 2
    // [1,4] ((4-1 + 1) * (1+4)) / 2

  // Using recursion
    // if(arr[0] == arr[1]){
    //   return arr[0]
    // }else{
    //   return rangeSum([arr[0], arr[1] -1]) + arr[1]
    // }

  // Using reduce
  let arrList = []
  for(let i = arr[0]; i<=arr[1]; i++){
    arrList.push(i)
  }
  return arrList.reduce((acc,curr)=>acc+curr, 0)
}

// Pratical application
/*
This challenge finds its application in mathematical operation 
involving number theory and combinatorics. It is also suffices as a 
coding challenge
*/