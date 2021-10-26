//22_5-1 Understand recursion is nothing but a simple for loop
// basic for loop decrimental loop 
let sum = 0;
for (let i = 6; i >= 1;i--){
    // console.log(i);
    sum=sum+i

} console.log(sum);
// recurision of loop decrimental

function sums(i) {
    if (i==1) {
        return 1;
    }
    return (sums(i - 1) + i);
    //
}
console.log(sums(6));

// # 22_5-2 Explore Factorial Recursion using a for loop concept
let multi=1
for (let i = 6; i > 1;i--){
    multi *= i;
}
console.log(multi);

function multiply(i) {
    if (i==1) {
        return 1;
    }
    return multiply(i - 1) * i;
}
console.log(multiply(6));

// # 22_5-3 Fibonacci element using recursion and recursion concept
/* fibonacci dara 

    [0,1,1,2,3,5,8,13,21......]
    6 er dara = 0,1,1,2,3,5,8
    n= [n-1]+[n-2];
    6=[6-1]+[6-2];{ 6= 5+3=8}

*/
const fibo = [0, 1];
for (let n = 2; n <= 8;n++){
    fibo[n] = fibo[n - 1] + fibo[n - 2];
}
console.log(fibo);
// fibonacci series er single element with recuirsive
function fibonacci(n) {
    if (n==0) {
        return 0
    }if (n==1) {
        return 1;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6));



