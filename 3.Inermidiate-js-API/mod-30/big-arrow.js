// Multi parameter
const add = (num, num2) => num + num2;
// single parameter
const add2 = num => num + 20;
// withOut parameter
const add3 = () => 'name is she';
// multiline code for arrow functions

const multiline = (x,y) => {
    const plus = x + y;
    const minus = x - y;
    return plus+minus
}
console.log(add(20,16));
console.log(add2(20));
console.log(add3());
console.log(multiline(15,10));