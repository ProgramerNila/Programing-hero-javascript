/* # 17-2 Declare Array, array length and array index */
const myFriendsAge = [1, 23, 54, 78, 55, 40, 24, 25, 65];
let favActress = ['mahi', 'sabnu', 'kopila',];
let oddNum = [1, 3, 5, 7, 9, 11]

console.log(favActress);
console.log(myFriendsAge.length);

/* 17-3 Array index, get and set by index, indexOf */

const myFriends = [1, 23, 54, 78, 55, 40, 24, 25, 65];
// 2 number position e k ase 
console.log(myFriends[2]);
// 78 er index koto or koto number e ase
console.log(myFriends.indexOf(78)); // 3 number e ase
// 111 koto numbr e ache
console.log(myFriends.indexOf(111)); // -1 ; means ata array er modde nai. tai tar position -1; {its vey important}

/* 17-4 Add or remove element from array using push, pop */

// add last element an array
myFriends.push('my new friend')
myFriends.push(1212)
console.log(myFriends);

//  remove last element an arry
myFriends.pop()
console.log(myFriends);

// add first element an array
myFriends.unshift(41)
console.log(myFriends);
// add remove element an array
myFriends.shift()
console.log(myFriends);










