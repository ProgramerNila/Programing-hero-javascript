const television = [
    { name: 'sumsung', price: 200, clor: 'black', inches: 27, modal: '57n', quantity:1 },
    { name: 'lg', price: 800, clor: 'black', inches: 27, modal: '57n', quantity:2 },
    { name: 'walton', price: 500, clor: 'black', inches: 27, modal: '57n', quantity:1 },
    { name: 'sony', price: 200, clor: 'black', inches: 27, modal: '57n', quantity:3 },
    { name: 'rojin', price: 800, clor: 'black', inches: 27, modal: '57n', quantity:4 },
    { name: 'konka', price: 200, clor: 'black', inches: 27, modal: '57n', quantity:5 },
    { name: 'habijabi', price: 100, clor: 'black', inches: 27, modal: '57n', quantity:1 },
    { name: 'tuim', price: 500, clor: 'black', inches: 27, modal: '57n', quantity:1 },
    { name: 'uteg', price: 500, clor: 'black', inches: 27, modal: '57n', quantity:2},
];
// price and quantity
function cart(shop) {
    let totalCart = 0;
    for (const product of shop) {
        const totalProduct = product.price * product.quantity;
        totalCart += totalProduct;
    }
    return totalCart
}
// console.log(cart(television));

// only price

function totalPrice(key) {
    let price = 0;
    for (const product of key) {
        price+=product.price
    }
    return price
}
console.log(totalPrice(television));