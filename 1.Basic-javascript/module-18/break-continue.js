/* # 18-8 (advanced) while and for loop break and continue */
// while loop for break
/* let i = 0;
while (i<=10) {
    if (i==5) {
        break;
    }
    i++
}
console.log(i); */

/* 
for (let i = 0; i < 13; i++){
    if (i>8) {
        break;
    }
console.log(i);
} */

// break for array with for loop

/* let num = [40, 25, 77,  200, 90, 60, 88, 55700,];
for (let i = 0; i < num.length; i++){
    let element = num[i];
    console.log(element);
    if (element>170) {
        break;
    }
} */
// continue Means skip kora


let num = [40, 25, 77,  200, 90, 60, 88, 55700,];
for (let i = 0; i < num.length; i++){
   let element = num[i];
   
    if (element>90) {
        continue;
    }
    console.log(element);
}













