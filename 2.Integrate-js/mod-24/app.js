
document.onclick = makeBlue;
function makeBlue() {
    document.getElementById('blue').style.backgroundColor='blue'
}
function makeRed() {
    let btn = document.querySelectorAll('button')
    let nd= btn[2]
    nd.style.backgroundColor='red'
    
}

// update text


document.getElementById('update__text').addEventListener('click',function () {
    const inputValue = document.getElementById('input__filed');
    const inputText = inputValue.value;
    // console.log(inputNum);
    const textid = document.getElementById('text__set');
    const textidText = textid.innerText;
    textid.innerText=inputValue.value
    inputValue.value=''

})
