// factorial
let fact = 1;
for (let i = 1; i <= 5; i++){
   
    fact = fact * i;
    
} console.log(fact);

// 19-6 Recalculate factorial multiple times using a function with for loop

function factFn(number) {
    let factorial = 1;
for (let index = 1; index <= number; index++){
    factorial = factorial * index;
}
    return factorial;
}

console.log(factFn(5));
// 19-6 Recalculate factorial multiple times using a function with while loop
function getFactorial(num) {
    let fact = 1;
    let i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;

    }
    return fact;
}

console.log(getFactorial(7));

// reverse or decriment of factorial with for loop

function forGetFact(num) {
    let fact= 1
    for (let i = num; i >= 1; i--){
        fact = fact * i;

    }
    return fact;
}
console.log(forGetFact(6));















