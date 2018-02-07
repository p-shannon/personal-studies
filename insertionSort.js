////////////////////////////////////////////////////////////
//  Sort an array by inserting them into a subarray in order 
////////////////////////////////////////////////////////////
//NOTE: This thing loops over an array twice, gunna have to cut down on that.
function insert(value, position, array){
	let tempArray = array.slice(0)
	if (position === tempArray.length){
		tempArray[position] = value
		return tempArray
	}
	if (position < 0 || position > tempArray.length){
		return false
	}
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
	return tempArray
}

function findSmallest(startRange, array){
	let smallest = array[startRange];
	let smallestPosition = startRange;
	for (let i = startRange; i < array.length; i++){
		if (array[i] < smallest){
			smallest = array[i];
		}
	}
	return smallestPosition;
}


