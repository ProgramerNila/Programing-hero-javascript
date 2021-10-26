
function updateInput(id,isIncrease,price) {
    const inputField = document.getElementById(`${id}-input`);
    const inputText = inputField.value;

    let inputNum = parseInt(inputText);
    // inputField.value = inputNum
    if (isIncrease) {
        inputNum=inputNum + 1
    } else if (inputNum>0) {
        inputNum=inputNum - 1
    }
    inputField.value = inputNum
//   return inputNum
    document.getElementById(`${id}-price`).innerText = inputNum * price;
    calcullatePrice()
}

function addTotal(id) {
    const totalValue = document.getElementById(id);
    const totalText = totalValue.value;
    const totalNum = parseInt(totalText);
    return totalNum;
}

function calcullatePrice() {
    const subtotal = addTotal('iPhone-input')*1219;
    const total = addTotal('phone-case-input')*59;
    const mainSubTotal = subtotal + total;
    
    const tax = mainSubTotal / 10;
    const mainTotal = tax + mainSubTotal;
    document.getElementById('sub-total').innerText = mainSubTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = mainTotal;

}

document.getElementById('iPhone-plus').addEventListener('click', function () {
    console.log(updateInput('iPhone', true, 1219));
    
})
document.getElementById('iPhone-minus').addEventListener('click', function () {
    console.log(updateInput('iPhone', false, 1219));
    
})
document.getElementById('phone-case-plus').addEventListener('click', function () {
    console.log(updateInput('phone-case', true, 59));
})
document.getElementById('phone-case-minus').addEventListener('click', function () {
    console.log(updateInput('phone-case',false,59));
})













