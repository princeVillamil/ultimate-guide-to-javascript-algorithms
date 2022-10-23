/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
   // Using for loop
      // arr.sort((a,z)=> a-z)
      // for(let i = 0; i<arr.length; i++){
      //    if(arr[i] >= num) return i
      // }
      // return arr.length

   // Using for loop to determine the number of smaller values
      // let counter = 0
      // for(let i = 0; i < arr.length; i++){
      //    if(num > arr[i]) counter++
      // }
      // return counter

   // Using a while loop
      // arr.sort((a,z)=> a-z)
      // let counter = 0
      // while(num > arr[counter]) counter++
      // return counter

   // Finiding the index of the value directly
      // arr.push(num)
      // arr.sort((a,z)=>a-z)
      // return arr.indexOf(num)

   
}

// Practical Application
// This challenge is mostly encounter in js interviews


module.exports = whereIBelong