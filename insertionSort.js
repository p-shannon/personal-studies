////////////////////////////////////////////////////////////
//  Sort an array by inserting them into a subarray in order 
////////////////////////////////////////////////////////////
	
function insert(value, position, array){
	let tempArray = array.slice(0)
	for (let i = array.length-1; i >= 0; i--){
		if (i != position){
			tempArray[i+1] = tempArray[i]
		}
		else{
			tempArray[i+1] = tempArray[i]
			tempArray[i] = value
			break
		}
	}
	console.log(tempArray)
	return tempArray
}


//// Tests!!!
let testArray = [1,7,4,8,9,0,3]
let newArray = []
function resetTestArrays(){
	newArray = testArray.slice(0)
}
// insert
newArray = insert(6,1,testArray)
console.assert(String(newArray) === String([1,6,7,4,8,9,0,3]),`6 doesn't correctly get inserted into index 1 of 'testArray' [${newArray}]`)
console.log(`6 correctly inserted into 'testArray'!`)
resetTestArrays()
newArray = insert(2,6,testArray)
console.assert(String(newArray) === String([1,7,4,8,9,0,2,300]),`2 doesn't correctly get inserted into index 6 of 'testArray' [${newArray}]`)
console.log(`2 correctly inserted into 'testArray'!`)
resetTestArrays()
newArray = insert(9,7,testArray)
console.assert(String(newArray) === String([1,7,4,8,9,0,3,9]),`9 doesn't correctly get inserted into index 7 of 'testArray' [${newArray}]`)
console.log(`9 correctly inserted into 'testArray'!`)
resetTestArrays()
console.log('All insert tests complete')

// sort

