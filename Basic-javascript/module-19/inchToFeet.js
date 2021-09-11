// inches to feet
function inchToFeet(inches) {
    let feet = 12;
    let inchConvertFeet = inches / feet;
    return inchConvertFeet;
}

let dadaInch = inchToFeet(132)
console.log(dadaInch);

let dadiInches = inchToFeet(144);
console.log(dadiInches);

// mile to km
function mileToKm(miles) {
    let mile = 1.60934;
    let km = mile * miles
    return km;
}
// console.log();
let marathon = mileToKm(26.2);
console.log(`marathon run: ${marathon}`);





