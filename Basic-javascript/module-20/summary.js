// lotary with Math.js
const lottary = Math.random() * 100
const round= Math.round(lottary)
console.log(round);

// 1-100 er modde 5 jon k  select for rondom
const picked= []
for (let i = 0; i < 5; i++) {
    const random = Math.random() * 100;
    const seleted = Math.round(random);
    if (picked.indexOf(seleted)==-1) {
        picked.push(seleted)
    } //else {
        //console.log(picked,seleted);
    //}

    
}
console.log(picked);





















