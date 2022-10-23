/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    // Using a for loop
        // let result = []
        // //Loop through with each array value
        // for(value of array){
        //     //Push into result if truthy
        //     if(value) result.push(value)
        // }
        // return result

    // Using filter
    return array.filter(x=> Boolean(x))


}


module.exports = falsyBouncer