let TestSeries = require('./function-tester.js');
let iSort = require('./insertionSort.js');

let insertTest = new TestSeries();
insertTest.addTest(iSort.insert, [3,3,2,3], "Properly inserts 2 into index 2 of the array", 2,2,[3,3,3]);
insertTest.addTest(iSort.insert, [2,3,3,3], "Properly inserts 2 into index 0 of the array", 2,0,[3,3,3]);

console.log(insertTest.run());

let searchTest = new TestSeries();
searchTest.addTest(iSort.findSmallest, 5, "Properly finds 2 in the subarray", 3, [0,1,1,7,4,2,9]);
searchTest.addTest(iSort.findSmallest, 1, "Properly finds 1 in the subarray", 1, [0,1,1,7,4,2,9]);

console.log(searchTest.run());
