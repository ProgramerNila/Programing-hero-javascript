function findLagestNum(num) {
    let biggest = num[0];

    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        if (element>biggest) {
            biggest = element;
        }
        
    }
    return biggest;
}

let largestNum = [52, 2, 56, 99, 105, 82, 20, 3, 75,500];
let biggestOfAnArray = findLagestNum(largestNum);
console.log(biggestOfAnArray);























