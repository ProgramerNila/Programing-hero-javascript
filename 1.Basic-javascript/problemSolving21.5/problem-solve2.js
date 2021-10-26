// ##problem No 1
/* # What to do ?
    1. write a function
    2. fnName feetToInch
    3. input feet and return Inch
    4. feet =convert inch 
    5. feet to inch formula 1ft= 12inch
*/
// Solve
function feetToInch(feet) {
    let inch = feet* 12;
    return inch;
}
 var ft= feetToInch(5)
console.log(ft);

// ##problem No 2
/* # What to do ?
    1. write a function
    2. fnName centimeterToMeter
    3. input centimeter and return Meter
    4. centimeter =convert Meter 
    5. centimeter to Meter formula 1ft= 12inch
*/

function centimeterToMeter(centimeter) {
    let Meter = centimeter / 100;
    return Meter
}
let cent = centimeterToMeter(500)
console.log(cent);
// ##problem No 3
/* 
    1. Function Name paperRequirements
    2. Book1-100 pages
    3. Book2-200 pages
    4. Book3-300 pages
    5. input hobe koto gula book lagbe
    6. return hobe sob book er er jonno koto page lagbe
*/

function paperRequirements(firstBook,secBook,thirdBook) {
    let pagebook1 = 100;
    let pagebook2 = 200;
    let pagebook3 = 300;
    let book1 = firstBook * pagebook1;
    let book2 = secBook * pagebook2;
    let book3 = thirdBook * pagebook3;
    let totalPages = book1 + book2 + book3;
    return totalPages;

}
let numberBook = paperRequirements(1, 1, 1)
console.log(numberBook);
// ##problem No 4
/* 
    1. Function Name bestFriend
    2. loop er maddome array nite hobe i position e 
    3. 
*/
function bestFriend(frirnds) {
    let large = frirnds[0];
    for (let i = 0; i < frirnds.length; i++){
        let s = frirnds[i];
        if (s.length > large.length) {
            large = s;
        }
        
    }
    return large;
}
let friendsName = bestFriend(['sila', 'sabinadddddddddddddddd', 'milaaaaaaaaaaaaa', 'hasibanakjhjh', 'janinaamigkg',]);

console.log(friendsName);

// ##problem No 5
 /* 
 1. array er modde number thakbe positive negetive,
 2. positive number gula akta vaiabele e rakte hobe, 
 3. negetive number er agey projonto.
 4. negetive number asle loop stop kore dite hobe 
 5. positive number gula return kore dite hobe
 */

let large = [25, 33, 58, 45, 78, -25, 58, -8, 0, -8,2];
let positive = [];
for (let i = 0; i < large.length; i++){
    let elem = large[i];
    // console.log(elem);
      if (elem<=0) {
            break;
      } else {
          positive.push(elem)
        }
    
   
}
console.log(positive); 

// ##problem No 6
// ##problem No 7
