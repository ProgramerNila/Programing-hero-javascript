// 1.
const name=`My Name is Nila`
let Age = 30
const user = {
    name:'jon',age:36,
}
//2.
const demo = ` My name is ${name} and age is ${Age} He is ${user.name} his age is ${user.age}`
console.log(demo);

//3.1 

const thirdOne = (x => x / 5)
console.log(thirdOne(15));

// 3.2

const thirdTwo = (num1, num2)=>{
    const sum1= num1+2
    const sum2= num2+2
    const tottal = sum1 * sum2;
    return tottal
}
console.log(thirdTwo(2,3));
// 3.3

const thirdThrrr = (num1, num2, num3) => num1 * num2 * num3;
console.log(thirdThrrr(3,3,3));
// 5

const numbers = [21, 2, 5, 8, 6,];
const add = numbers.map(x => x * 5)
console.log(add);

// 6 
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)

console.log(odds)

// 7
const car = [
    { type: "lkljFiat", model: "200", color: "white", price: 5000 },
    { type: "Fiat", model: "500", color: "white", price: 2000 },
    { type: "Fiat", model: "500", color: "white", price: 5000 },
    { type: "Fiat", model: "500", color: "white", price: 32000 },
] 

const only = car.find(elment => elment.price==5000)
console.log(only);

// 8
const cars = { type: "lkljFiat", model: "200", color: "white", price: 5000 };
const { model, type } = cars
console.log(model, type);

// 9

const [one, two, three, four] = [2, 52, 63, 85, 45, 78, 49];
console.log(three);
// 10
const threePara = (num, num2, num3=7)=>{
    const sum = num + num2 + num3;
    return sum;
}

console.log(threePara(2,5,10));

// 11
 
const nestsedObj = {
    name: 'jone',
    home: 'barisal',
    other: {
        names: 'other',
        address: {
            thana:'uzirpue'
        }
    }
}
const chain = nestsedObj.name.other;
console.log(chain);
console.log(nestsedObj.other);

