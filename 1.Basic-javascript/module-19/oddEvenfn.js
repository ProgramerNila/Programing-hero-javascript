//  Odd number check
const number = 787;
const oddNumber = number % 2;
console.log(oddNumber);
// Even Number Check

const num = 14;
console.log(num % 2);
// 5 TO 15 ODD number and even number show
for (let i = 5; i <= 15; i+=2){
    console.log(i);
}
for (let index = 6; index < 15; index += 2){
    console.log(index);
}
// # 19-3 Check even and odd number using function

function myOddNumber(num) {
    if (num % 2 == 0) {
        return true;
    } return false;
}
console.log(myOddNumber(52));

function myEvenNumber(num) {
    if (num % 2 != 0) {
        return true;
    } return false;
}
console.log(myEvenNumber(52));






