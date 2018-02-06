function TestSeries() {
	this.tests = []
	this.results = []
}

TestSeries.prototype.addTest = function(operation, assertion, ...inputs){
	this.tests.push({
		operation: operation,
		assertion: assertion,
		inputs: inputs
	})
}

TestSeries.prototype.run = function(){
	for (let i = 0; i < this.tests.length; i++){
		console.log('ding')
		if(this.tests[i].operation(...this.tests[i].inputs)===this.tests[i].assertion){
			this.results[i] = true
		}
		else{
			this.results[i] = false
		}
	}
}
////TESTS
//actually work
function sum(a,b=a){
	console.log("a",a,"b",b,"sum",a+b)
	return a+b
}
let meta = new TestSeries()
meta.addTest(sum, 3, 1, 2)
console.log(meta.tests)
meta.run()
console.log(meta.results)
