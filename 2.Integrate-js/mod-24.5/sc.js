const blogdetails= document.getElementsByTagName('h1');
for (const p of blogdetails) {
    p.style.color = 'lightblue';
}
const cardDetails= document.getElementsByClassName('card');
for (const card of cardDetails) {
    card.style.borderRadius = '50px';
}

document.getElementById('bages').style.backgroundColor='tomato'

function handle() {
    console.log('cliked');
}

const butn = document.getElementsByClassName('btn');
for (const b of butn) {
    b.addEventListener('click', function (e) {
        console.log(e.target.remove(e.target));
    })
}

document.getElementById('eail-btn').addEventListener('click', function () {
    
})

document.getElementById('in-fi').addEventListener('keyup', function (e) {
    if(e.target.value = 'email'){
        document.getElementById('eail-btn').removeAttribute('disabled')
    } else {
        document.getElementById('eail-btn').setAttribute('disabled',true)
   }   
})

document.getElementById('contact').addEventListener('dblclick', function () {
    document.getElementById('contact').style.backgroundColor = 'red';
})

document.getElementById('imgs').addEventListener('mouseenter', function () {
    document.getElementById('imgs').src = 'images/bags/bag-2.png';
})
