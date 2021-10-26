// 16.2 module 
var w = 'my name is nila';
console.log(w);
// 16.3 module 
// 1. Numeric / number= 1,2,333,;
var number = 123;
/*2. String / letter = "abcd"; */
var name = "humasha";
 
/* 16-5 Simple Mathematical operations in JavaScript + 16-6 (advanced) Mathematical operation shorthand*/

// যোগ 
let add = 30;
let add2 = 20;
let sum = add + add2;

console.log(sum);
// বিয়োগ 
let Subtraction = add - add2;
console.log(Subtraction);
// গুন
let Multiply = add * add2
console.log(Multiply);
//ভাগ
let divide = add / add2
console.log(divide);

/* 16-6 (advanced) Mathematical operation shorthand */
var price1 = 20;
price1 = price1 + 30; // 
price1 += 30;

console.log(price1);
// value 1 বাড়লে
price1++;
console.log(price1);
// value 1 komle
price1--
console.log(price1);

/* ##16-7 (advanced) Integer float parseInt parseFloat type conversion */

var fName = "nila";
var lName = "12";
var fullName = fName + ' '+ lName;
console.log(fullName);

// parseFloat 
var floatingNum = "20.35";
console.log(parseFloat(floatingNum));
console.log(parseInt(floatingNum));
// check typeof
 
console.log(typeof floatingNum);
// special jog
var d1 = 0.1;
var d2 = 0.2;
var td = d1 + d2;
// console.log( td.toFixed(2));
// console.log(typeof td.toFixed(2));
td = td.toFixed(1);
td = parseFloat(td);
console.log( typeof td);
// Modulas 
let num01 =4;
let num02 = 2;
let modu = num01 % num02;
console.log(modu);



















































