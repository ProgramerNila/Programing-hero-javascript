const products = [
    { name: 'asus laptop', price: 1200},
    { name: 'lg laptop', price: 1200},
    { name: 'jadaus laptop', price: 1200},
    { name: 'asus phone ', price: 1200},
    { name: 'asus watch', price: 1200},
    { name: 'asus covr', price: 1200},
    { name: 'asus laptop', price: 1200},
    { name: 'smasung laptop', price: 1200},
    { name: 'asus laptop', price: 1200},
    { name: 'lg laptop', price: 1200},
]

function srch(products, searchText) {
    const macthed = [];
    for (const product of products) {
        const name = product.name
       if (name.indexOf(searchText.toLowerCase())!=-1) {
           macthed.push(product)
       }
        
    }
    return macthed;
}
const srcprod = srch(products, 'PHONE')
console.log(srcprod);