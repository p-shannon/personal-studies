////todo: make this object oriented
function test( operation, assertion, ...inputs){
	console.assert(typeof(operation) === "function","Non-function data-type used for operation parameter. Needs a function.")
	console.assert(typeof(assertion) != "function","function data-type used for assertion parameter. Needs a boolean expression.")

	//todo: special functionality depending on type of input
	if (operation(...inputs) === assertion){
		return true
	}
	else {
		return false
	}
}

////TESTS
//accept multiple input
function sum(num1,num2=num1){
	console.log("num1",num1,"num2",num2,"sum",num1+num2)
	return num1+num2
}

console.assert(test(sum, 3, 1, 2),"Test didn't return true, try again.")
console.assert(!(test(sum, 9, 1)), "Test didn't return false, try again.")
