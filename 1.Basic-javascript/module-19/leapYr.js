function isLeepYear(year) {
    if ((year % 4 == 0)&& (year%100==!0)||(year % 400 == 0)) {
        return true;
        
    } return false;
}


console.log(isLeepYear(2400));

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2021));






