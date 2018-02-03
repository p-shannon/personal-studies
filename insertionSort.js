////////////////////////////////////////////////////////////
//  Sort an array by inserting them into a subarray in order 
////////////////////////////////////////////////////////////



let testArray = [1,7,4,8,9,0,3]

function insert(){}

//// Tests!!!
// insert
console.assert(insert(6,1,testArray)===[1,6,7,4,8,9,0,3],"6 doesn't correctly get inserted into index 1 of 'testArray'${testArray}")
console.log("6 correctly inserted into 'testArray'!")
console.assert(insert(9,4,testArray)===[1,7,4,8,9,9,0,3],"9 doesn't correctly get inserted into index 4 of 'testArray'${testArray}")
