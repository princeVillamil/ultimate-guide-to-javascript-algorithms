/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    // Using a for-loop
    let result = 0
    if(stringA.length !== stringB.length) throw new Error('Strings do not have equal length')
    for(let i = 0; i<stringA.length; i++){
        if(stringA[i].toLowerCase() != stringB[i].toLowerCase()) result ++
    }
    return result
}



module.exports = hammingDistance