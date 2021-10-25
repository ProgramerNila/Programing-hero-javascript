function addCost(id,price) {
    document.getElementById(id).innerText = price;
    calculatePrice()
}
function getAmount(id) {
    const amount = document.getElementById(id);
    const amountNum = parseInt(amount.innerText);
    return amountNum;
    
}
function calculatePrice() {
    const bestPrice= getAmount('best-price')
    const memoryCost = getAmount('memory-cost');
    const strogeCost = getAmount('storage-cost');
    const deleveryCost = getAmount('delivery-cost');
    const totalCost = bestPrice + memoryCost + strogeCost + deleveryCost;
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('total-price').innerText = totalCost;
}

function promoCode() {
    const inputField = document.getElementById('promo-input');
    const inputNum = parseInt(inputField.value);
    const mainCost = document.getElementById('total-price');
    const mainCostText = mainCost.innerText;
    const mainCostNum = parseInt(mainCostText);
    let totalCost = 0;
    if (inputField.value=='stevekaku') {
        totalCost = mainCostNum - mainCostNum * 0.2;
        inputField.value=''
    } else {
        totalCost= mainCostNum
    }
    mainCost.innerText = totalCost;
}
document.getElementById('promo-btn').addEventListener('click', function () {
    promoCode()
})

document.getElementById('memory-8gb').addEventListener('click', function () {
    addCost('memory-cost',0)
})
document.getElementById('memory-16gb').addEventListener('click', function () {
    addCost('memory-cost',180)
})
document.getElementById('storage-256gb').addEventListener('click', function () {
    addCost('storage-cost',0)
})
document.getElementById('storage-512gb').addEventListener('click', function () {
    addCost('storage-cost',100)
})
document.getElementById('storage-1tb').addEventListener('click', function () {
    addCost('storage-cost',180)
})
document.getElementById('delivery-free').addEventListener('click', function () {
    addCost('delivery-cost',0)
})
document.getElementById('delivery-paid').addEventListener('click', function () {
    addCost('delivery-cost',20)
})