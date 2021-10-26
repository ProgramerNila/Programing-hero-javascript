// 20-2 Swap variable, swap without temp, destructing
let num = 5;
let num2 = 7;
console.log(num, num2);
let temp = num;
num = num2;
num2 = temp;
console.log(num,num2);
// destructing 
let first = 8;
let secound = 10;
[first, secound] = [secound, first];
console.log(first, secound);









