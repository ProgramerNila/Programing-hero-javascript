// 1. function Declaration

function add1(num,num2) {
    return num + num2;
}

//2. function expression
const add2= function add2(num,num2) {
    return num + num2;
}
//3. function expression (anonymous)
const add3 = function(num,num2) {
    return num + num2;
}
//4. Arrow function
const add4= (num,num2)=>num+num2
console.log(add1(20,25));
console.log(add2(20,25));
console.log(add3(20,25));
console.log(add4(20,25));















