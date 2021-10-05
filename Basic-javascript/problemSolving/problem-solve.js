// # Problem no 7.
/* 
1. While loop দিয়ে 7-19 number show 
2. 7-19 odd number show

*/
// Solved 1
let number=7
while (number <= 19) {
    console.log(number);
    number++
}
// Solved 2
let oddNumber=7
while (oddNumber <= 19) {
    console.log(oddNumber);
    oddNumber+=2
}
// # Problem no 8.
/* 
1. Declear an Array
2. how many elements have an array show it
3. position number 4 an array change or replace it
4. sum array of element only 2 array
5. out an element of array

*/
// solve 1:
let myNumbers = [4, 25, 9, 65, 36, 45, 78, 21, 5, 8, 6, 98, 3];
// console.log(myNumbers);
// Solve 2:
for (let index = 0; index < myNumbers.length; index++) {
    const element = myNumbers[index];
    console.log(element);
}
// Solve 3:
myNumbers[3] = 100;
console.log(myNumbers);

// Solve 4:
let sum = 0;
for (let index = 0; index < myNumbers.length; index++) {
    const element = myNumbers[index];
    // console.log(element);
    sum+=element
   
}
 console.log(sum);
// Solve 5:
myNumbers.pop()
console.log(myNumbers);

// # Problem no 9.
// solve 
for (const number of myNumbers) {
    console.log(number);
}
// # Problem no 10.

/* 
1. declear Array
2.if bigger then 80 then output show it
*/

let bigger80 = [20, 100, 500, 60, 70, 65, 90, 200];

for (let index = 0; index < bigger80.length; index++) {
    const element = bigger80[index];
    // console.log(element);
    if (element<80) {
        continue;
    }
    console.log(element);
}

// # Problem no 11.
/* 
    1. 3 numbers gun
    2. total sum
*/

// Solve 1:
let num1 = 5;
let num2 = 5;
let num3 = 5;
let multipy = num1 * num2 * num3;
console.log(multipy);

// # Problem no 12.
/* 
1 . Declear Object and 3 property and change on property Value
*/
// Solve 1:

const users = {
    name: 'jhon',
    age: 47,
    home: 'barishal'
}
console.log(users.home);
users.home = 'Dhaka'
users['name'] = 'Riya'
let change = users['age']

console.log(users);






