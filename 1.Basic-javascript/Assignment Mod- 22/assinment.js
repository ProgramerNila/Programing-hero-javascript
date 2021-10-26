// Problem no 1
function seerToMon(seer) {
    if (seer<=0) {
        return 'give positive number'
    }
    const seerConvertMon = seer / 40;
    return seerConvertMon;
}
console.log(seerToMon(80));

// Problem no 2
function totalSales(shirt, pants, shoes) {
      if (shirt <= 0 || pants <= 0 || shoes <= 0) {
        return'give right numbver'
        
    }
   let shirtPrice = 100;
   let pantPrice = 200;
    let showPrice = 500;
  
    let totalShirtPrice = shirtPrice * shirt;
    let totalPantPrice = pantPrice * pants;
    let totalShoePrice = showPrice * shoes;
    let dailySales = totalShirtPrice + totalShoePrice + totalPantPrice;
    return dailySales;

    
}

console.log(totalSales(1,-1,1));

// Problem no 3

function deliveryCost(shirts) {
    let first100Cost = 100;
    let sec100To200Cost = 80;
    let After200Cost = 50;
   
    if (shirts >= 0 && shirts <= 100) {
        let first = shirts * 100;
        return first;
    } else if (shirts>=100&&shirts<=200) {
        let first100 = first100Cost * 100;
        let sec100 = shirts - 100;
        let rest = sec100 * sec100To200Cost;
        let for200 = first100 + rest;
        return for200;

    } else if(shirts>=200){
        let first100 = first100Cost * 100;
        let sec100 = sec100To200Cost * 100;
        let rest = shirts - 200;
        let after200 = rest * After200Cost;
        let total = first100 + sec100 + after200
        return total;
    } else {
        return 'invalid '
    }
}
console.log(deliveryCost(201));

// // Problem no 4

function perfectFriend(friends) {
    for (const iterator of friends) {
        if (iterator.length===5) {
            return iterator;
        }
    }
}
console.log(perfectFriend(['mila','tania','jorina','tttttttttttt','jgfgd','hhhhhhhhhhhh','gfggd']));
