let first = 550;
let sec = 660;
let third = 770;
// normal way in find max number in three number
if (first>sec && first>third) {
    console.log('ami boro , ami first');
} else if (sec>first && sec>third) {
    console.log('ami boro , ami sec'); 
} else {
    console.log('ami boro , ami third');
}

// functional way in find max number in three number

function findMaxNum(first,sec,third) {
    if (first>sec && first>third) {
        return'ami boro , ami first' + first;
    } else if (sec>first && sec>third) {
        return'ami boro , ami sec' + sec; 
    } else {
       return'ami boro , ami third' + third;
    }
}
let max = findMaxNum(30, 50, 7)
console.log(max);
// Another way to find max number only get value

let find = Math.max(third, sec, first)
console.log(find);

function findMinNum(first,sec,third) {
    if (first<sec && first<third) {
        return'ami soto , ami first' + first;
    } else if (sec<first && sec<third) {
        return'ami soto , ami sec' + sec; 
    } else {
       return'ami soto , ami third' + third;
    }
}

let min = findMinNum(30, 50, 7)
console.log(min);







