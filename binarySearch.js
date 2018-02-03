function binarySearch(array, target, min = 0, max = array.length - 1){
	//console.log('ding')
	//console.log('target',target)
	//console.log('min',min,":max",max)
	let guess = Math.floor((max + min) / 2)
	//console.log('guess',guess,"current",array[guess])
		if (array[guess] === target){
    	return guess
    }
    else if (array[guess] < target){
    	return binarySearch(array, target, guess + 1, max)
    }
    else {
    	return binarySearch(array, target, min, guess - 1)
		}
}

let arr = [1,2,3,4,5,6,7,8]

//console.log(binarySearch(arr, 1))
console.assert(binarySearch(arr, 7) === 0, "Failed to find '1' in the array (the first index)")
console.log('Found 1 successfully')
console.assert(binarySearch(arr, 7) === 6, "Failed to find '1' in the array (the sixth index)")
console.log('Found 7 successfully')
console.log('All tests passed! Please remember to include logic for not finding the requested object!')
//Todo: Handle errors
