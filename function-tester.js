//TODO make TestSeries act more like instances of a group of tests able to be used in another's tests.

function TestSeries() {
	this.tests = [];
	this.results = [];
}

TestSeries.prototype.addTest = function(operation, assertion, assertionDescription, ...inputs){
	this.tests.push({
		operation: operation,
		assertion: assertion,
		assertionDescription: assertionDescription,
		inputs: inputs
	})
}

//TODO Make use of promise objects to implement a runtime count
TestSeries.prototype.run = function(){
	let resultString = "=====[ BEGIN TESTS ]===== \n \n";
	let passes = 0;
	for (let i = 0; i < this.tests.length; i++){
		if(typeof(this.tests[i].assertion) != "object"){
			if(this.tests[i].operation(...this.tests[i].inputs)===this.tests[i].assertion){
				this.results[i] = true;
				resultString += `..PASS..: ${this.tests[i].assertionDescription} \n`;
				++passes;
			}
			else{
				this.results[i] = false;
				resultString += `!!FAIL!!: ${this.tests[i].assertionDescription} \n`;
			}
		}
		else{

		}
	}
	resultString += "\n=====[   RESULTS   ]===== \n \n";
	let percent = (passes/this.tests.length)*100;
	resultString += `${percent}% of tests passed. \n \n=====[  END TESTS  ]=====`;
	return resultString;
}

module.exports = TestSeries;
