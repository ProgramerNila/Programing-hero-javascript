/* /* /* 1. array এর মধ্যে থেকে সবচেয়ে বড় Element  বের কর */

function findLargest(num) {
  let largeNum = num[0];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > largeNum) {
      largeNum = element;
    }
  }
  return largeNum;
}
const large = [56, 8, 58, 99, 25, 1163, 67, 800, 5, 7];
const getLargestNum = findLargest(large);
// console.log(getLargestNum);
/* 2. array এর মধ্যে থেকে সবচেয়ে ছোট Element  বের কর */

function findSmallest(num) {
  let smallNum = num[0];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    /* if (typeof element!= Number) {
          return 'findSmallest(num)';
      } */ // this is my experiment . its optional
    if (element < smallNum) {
      smallNum = element;
    }
  }
  return smallNum;
}
const small = [56, 8, 58, 99, 25, 1163, 67, 800, 5, 7, 0, "-56"];
const getSmallestNum = findSmallest(small);
// console.log(getSmallestNum);
/* 3. array এর মধ্যে থেকে  জোড় Element  বের কর */

function findEven(num) {
  let evenNum = [];// default value empty array
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (element % 2 == 0) {
      evenNum.push(element);
    }
  }
  return evenNum;
}
const even = [56, 8, 58, 99, 25, 1163, 67, 800, 5, 7];
const getEvenNum = findEven(even);
console.log(getEvenNum);

/* 3. array এর মধ্যে থেকে  জোড় Element  বের কর */

function findOdd(num) {
  let OddNum = []; // default value empty array
  for (let i = 0; i < num.length; i++) {
    let element = num[i];
    if (element % 2 != 0) {
      OddNum.push(element);
    }
  }
  return OddNum;
}
const odd = [56, 8, 58, 99, 25, 1163, 67, 800, 5, 7];
const getOddNum = findOdd(odd);
console.log(getOddNum);

/* function evenN(a) {
    let ar = []
    for (var i = 0; i < a.length; i++) {
        if(a[i] % 2 == 0) { // index is even
            ar.push(a[i]);
        }
    }
    return ar
}
console.log(evenN([33,22,5,2,81])); */
