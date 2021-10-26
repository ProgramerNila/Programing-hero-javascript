/* console.log(5<6);
console.log(5<=6);
console.log(5>6);
console.log(5>=6);
console.log(5==6);
console.log(5 != 6); */

let banker = true;
let taka = 20;
console.log(banker==true && taka==20);
console.log(banker==true && taka==0);
console.log(banker == true || taka == 0);

/* 17-6 Make conditional decision, if-else, comparison */

if (banker==true) {
    console.log('ready');
} else {
    console.log('no');
}
// 17-7 Handle multiple conditions, and or
if (banker==true && taka==0) {
    console.log('ready');
} else {
    console.log(12);
}

/* 17-8 (Advanced) Multi stage condition and nested conditions */

var danis = 50;
var tea = 10;
var myBudget = 30;
var packWelld = false;
// conditions
if (danis>myBudget) {
    console.log('খেতে পারব না');
} else {
    console.log('খেতে পারব দানি');
}
// Multipale conditions
if (tea>myBudget) {
    console.log('tea');
} else if (myBudget<danis) {
    console.log('danis er dam besi , akon ki korbo');
} 

else {
    console.log('kisui nai');
}
// nested conditons
if (myBudget>danis) {
    if (packWelld == true) {
        console.log('khabo');
    } else {
        console.log('khabo na');
    }
}













