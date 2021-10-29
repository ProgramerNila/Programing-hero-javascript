const myObj = {
    name: 'jon',
    address: {
        house: 20,
        road: 85,
        homeName: 'kasi Vila'
    }

}
const { name, address } = myObj;
const { house, road } = myObj.address;
// can not read property error handale
console.log(house?.homeName?.address);



//// destracting in array

const [a, v, f, k] = [25, 33, 35, 96,]
console.log(v);



