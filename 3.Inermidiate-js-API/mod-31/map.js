/* akta array er mddode theke sob elemen k double kore daw
 */

// /* Normal system
// 1. for loop diye element nibo 
// 2. sob element k 2 diya gun korbo 
// 3. new akta array er modde  push kore dibo
// * /

const numver = [20, 40, 5, 6];
const output = [];
for (const num of numver) {
    const add = num * 2;
    // output.push(add)
}
// console.log(output);

/* secound system with arrow function */

const doubleIt = x => x * 2;

for (const num of numver) {
    const add = doubleIt(num);
    output.push(add)
}
console.log(output);

/* Map system */

const oup = numver.map(doubleIt);
console.log(oup);








