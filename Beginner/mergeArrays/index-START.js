/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    // Example
        // let jointArray = []
        // arrays.forEach(array => {
        //     jointArray = [...jointArray, ...array]
        // });
        // return [...new Set([...jointArray])]

    // let array = Array.from(arrays) // method that creates a new array instance from an array-like or iterable object
    // console.log(array)

    // Combining the arrays
        // let jointArray = []
        // arrays.forEach(array=> jointArray = [...jointArray, ...array])

    // Using sets
        // a SET in js is an object used to store a collection of values of any type
        // let jointArray = []
        // arrays.forEach(arr=> jointArray = [...jointArray, ...arr] )
        // return [...new Set([...jointArray])] // This will eliminates all dup

    // Using Array.from
        // let jointArray = []
        // arrays.forEach(arr=>jointArray = [...jointArray, ...arr])
        // return Array.from(new Set([...jointArray]))

    // Using filter FASTEST <-----------------------------------
        // let jointArray = []
        // arrays.forEach(arr=> jointArray = [...jointArray, ...arr] )
        // const uniqueArray = jointArray.filter((x, i)=> jointArray.indexOf(x) === x )
        // return uniqueArray

    // Using reduce
        // let jointArray = []
        // arrays.forEach(arr=> jointArray = [...jointArray, arr])
        // const uniqueArray = jointArray.reduce((acc, curr)=>{
        //     if(acc.includes(curr)) return acc
        //     else return [...acc, curr]
        // }, [])
        // return uniqueArray
}


module.exports = mergeArrays