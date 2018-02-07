function TestSeries() {
	this.tests = []
	this.results = []
}

TestSeries.prototype.addTest = function(operation, assertion, assertionDescription, ...inputs){
	this.tests.push({
		operation: operation,
		assertion: assertion,
		assertionDescription: assertionDescription,
		inputs: inputs
	})
}

TestSeries.prototype.run = function(){
	let resultString = "=====[ BEGIN TESTS ]===== \n \n"
	let passes = 0
	for (let i = 0; i < this.tests.length; i++){
		console.log('ding')
		if(this.tests[i].operation(...this.tests[i].inputs)===this.tests[i].assertion){
			this.results[i] = true
			resultString += `..PASS..: ${this.tests[i].assertionDescription} \n`
			++passes
		}
		else{
			this.results[i] = false
			resultString += `!!FAIL!!: ${this.tests[i].assertionDescription} \n`
		}
	}
	resultString += "\n=====[   RESULTS   ]===== \n \n"
	let percent = (passes/this.tests.length)*100
	resultString += `${percent}% of tests passed. \n \n=====[  END TESTS  ]=====`
	return resultString
}
////TESTS
//actually work
function sum(a,b=a){
	console.log("a",a,"b",b,"sum",a+b)
	return a+b
}
let meta = new TestSeries()
meta.addTest(sum, 3,"Adds 1 and 2 to get 3.", 1, 2)
meta.addTest(sum, 9,"Adds two numbers to get 9.", 8,100)
//console.log(meta.tests)
console.log(meta.run())
