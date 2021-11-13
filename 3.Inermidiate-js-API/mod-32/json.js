const user = {
    name: 'he',
    age: 30,
    see: 'you',
    isMarried: true,
}

const userInput = JSON.stringify(user); // return as a string
const convert= JSON.parse(userInput) // return as object
console.log(userInput, convert);

let animals = [
    'cat', 'dog', 'elephant', 'bee', 'ant'
];

animals.sort((a, b) => {
    if (a > b)
        return -1;
    if (a < b)
        return 1;
    return 0;
});

console.log(animals);






