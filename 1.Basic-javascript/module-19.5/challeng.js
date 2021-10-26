// 1. declear 3 var

var name = 'kalkhkh';
let num = 2123;
const input = 12.5;

// 2. loop for 1 to 100
for (let i = 1; i <= 100; i++){
    // console.log(i);
}

// 3. oddNumber 50 to 80 
for (let p = 51; p <= 80; p += 2){
    // console.log(p);
}

// 4. 3 number jog wtih function
function add(num1,num2,num3) {
    let sum = num1 + num2 + num3;
    return sum;
}

let totalSum = add(20, 5, 20);
console.log(totalSum);

// Extra home work
//1. Clcius to farenhite formula (°C × 9/5) + 32 = 32°F

function celciusToFarenhiet(cel) {
    let convet = (cel * 9 / 5) + 32
    return convet
}
// console.log(celciusToFarenhiet(2));

//2 . farenhite to celcius (32°F − 32) × 5/9
function farenhitToCel(fer) {
    let convet2 = (fer - 32) * 5 / 9;
    return convet2;
}

// console.log(farenhitToCel(322));

// 3 . Grade Calculator
function grade(markes) {
    if (markes <= 100 && markes >= 80) {
        console.log(`you got A+`);
        
    }
    if (markes <= 79 && markes >= 70) {
        console.log(`you got A-`);
        
    }
    if (markes <= 69 && markes >= 60) {
        console.log(`you got A`);
        
    }
    if (markes <= 59 && markes >= 50) {
        console.log(`you got B`);
        
    }
    if (markes <= 49 && markes >= 40) {
        console.log(`you got C`);
        
    }
    if (markes <= 39 && markes >= 33) {
        console.log(`you got D`);
    }
    if (markes <= 32 && markes >= 0) {
        console.log(`failer`);
        
    } else {
        console.log(`invalid mark`);
    }
    
}
console.log(grade(101));

// 4. simple Interset formula SI = (P * T * R) / 100
/* 
P = principal amount

T = time

R = rate

SI = simple interest */
function simpleInteset(principalAmount,time,rate) {
    let simpleInterestCal  = (principalAmount * time * rate) / 100;
    return simpleInterestCal ;
}


console.log(simpleInteset(60000,12,5));
