const television = [
    { name: 'sumsung', price: 20000, clor: 'black', inches: 27, modal: '57n' },
    { name: 'lg', price: 8000, clor: 'black', inches: 27, modal: '57n' },
    { name: 'walton', price: 15000, clor: 'black', inches: 27, modal: '57n' },
    { name: 'sony', price: 22000, clor: 'black', inches: 27, modal: '57n' },
    { name: 'rojin', price: 800, clor: 'black', inches: 27, modal: '57n' },
    { name: 'konka', price: 25500, clor: 'black', inches: 27, modal: '57n' },
    { name: 'habijabi', price: 120000, clor: 'black', inches: 27, modal: '57n' },
    { name: 'tuim', price: 30000, clor: 'black', inches: 27, modal: '57n' },
    { name: 'uteg', price: 40000, clor: 'black', inches: 27, modal: '57n' },
];
let cheap = television[0];
for (const tv of television) {
    if (tv.price<cheap.price) {
        cheap = tv;
    }
}
console.log(cheap);

// use function

function cheapest(tele) {
    let cheap = tele[0];
for (const tv of tele) {
    if (tv.price<cheap.price) {
        cheap = tv;
    }
    }
    return cheap
}
const chepestTv = cheapest(television);
console.log(chepestTv);