
// array jogfol
let numbers = [44, 21, 68, 95, 4, 3, 58, 74]
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum+ element
    
}
console.log(sum);

// array jog fol with fn

function arraySum(numbers) {
    let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum+ element
    
    }
    return sum
}
let addSum = arraySum([2, 22, 33, 3, 54])
console.log(addSum);



