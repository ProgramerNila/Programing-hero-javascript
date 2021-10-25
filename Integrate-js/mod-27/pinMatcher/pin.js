
function getPin() {
    const randomNum = parseInt(Math.random() * 10000);
    
    if ((randomNum+'').length==4) {
        return randomNum;
       
    } else {
        console.log('this is 3',randomNum);return getPin()
        
    }
}

document.getElementById('genarate_pin').addEventListener('click', function () {
   
    const inputField = document.getElementById('input_firld');
    // const inputNum = inputField.value;
    inputField.value=getPin()
})
//////////////////////////////////

document.getElementById('cal_container').addEventListener('click', function (e) {

    const number = e.target.innerText;
   if (isNaN(number)) {
       
   } else {
       const numDisplay = document.getElementById('display_num');
    // const numbers = numDisplay.value;
    numDisplay.value += number;
   }
        

    
})

document.getElementById('submit_btn').addEventListener('click', function () {
    let first = document.getElementById('input_firld').value;
    let sec = document.getElementById('display_num').value;
    if (first==sec) {
        document.getElementById('notMatch').style.display='none'
        document.getElementById('match').style.display='block'
    } else {
        document.getElementById('notMatch').style.display='block'
        document.getElementById('match').style.display='none'
    }

    if (first!=sec) {
       
        let num = document.getElementById('number').innerText -= 1
        if (num<=0) {
            alert('try agian')
        }
    }
    else {
        let num = document.getElementById('number').innerText -= 0
    }
})












