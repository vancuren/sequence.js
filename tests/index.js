const Collection = require('../');

let testNumArr = [1,2,3,4,5,6,7,8,9,10];
let testStrArr = ["1","2","3","4","5","6","7","8","9","10"];
let testObjArr = [{ num: 1, str: "1" },{ num: 2, str: "2" },{ num: 3, str: "3" },{ num: 4, str: "4" },{ num: 5, str: "5" },{ num: 6, str: "6" },{ num: 7, str: "7" },{ num: 8, str: "8" },{ num: 9, str: "9" },{ num: 10, str: "10"}];
let testSeqArr = [1,2,3,4,4,6,5,5,9,10];

let testNum = new Collection(testNumArr);
let testStr = new Collection(testStrArr);
let testObj = new Collection(testObjArr);
let testSeq = new Collection(testSeqArr);

// ** Average
// console.log(testObj.average('str'));
// console.log(testStr.average());
// console.log(testNum.average());

// ** Chunck
// console.log(testObj.chunck(2));
// console.log(testStr.chunck(5));
// console.log(testNum.chunck(4));

// ** Combine
// let keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// console.log(testObj.combine(keys));
// console.log(testStr.combine(keys));
// console.log(testNum.combine(keys));

// ** Concat
// console.log(testObj.concat(keys));
// console.log(testStr.concat(keys));
// console.log(testNum.concat(keys));

// ** Concat
// console.log(testObj.contains('2'));
// console.log(testStr.contains('2'));
// console.log(testNum.contains('2'));

// ** Count
// console.log(testObj.count('num'));
// console.log(testStr.count());
// console.log(testNum.count());

// ** CountBy
// console.log(testSeq.countBy());

// ** CrossJoin
// console.log(testObj.crossJoin(['x','z']));
// console.log(testStr.crossJoin(['x','z']));
// console.log(testNum.crossJoin(['x','z']));

// ** Dump
// console.log(testObj.dd());
// console.log(testStr.dd());
// console.log(testNum.dd());

// ** Diff
// console.log(testObj.diff(testSeqArr));
// console.log(testStr.diff(testSeqArr, true));
// console.log(testNum.diff(testSeqArr));

// ** Sum
// console.log(testObj.sum('num'));
// console.log(testStr.sum());
// console.log(testNum.sum());


// let data = [1,2,3,4,5,6].chunk(4)
// console.log(data)

