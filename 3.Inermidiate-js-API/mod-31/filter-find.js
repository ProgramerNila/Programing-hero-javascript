const shopping = [
    {name: 'sam', price: 200},
    {name: 'sam', price: 500},
    {name: 'dam', price: 50},
    {name: 'nmam', price: 500},
]

const findElement = shopping.find(x => x.name == 'sam');
const filterElement = shopping.filter(x => x.name == 'sam');
console.log(filterElement);
console.log(findElement);