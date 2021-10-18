const bet = document.querySelector('.blogs');
bet.setAttribute('id','he');

console.log(bet);
const demo = document.querySelectorAll('.comon')
const first = demo[0];
first.setAttribute('id', 'firstpar')
console.log(demo);

document.write('my');

// # 23-8 Create HTML elements using Javascript and appendChild
const ul = document.createElement('article');
// const li = document.createElement('li');
ul.innerHTML = `
<h3>test</h3>
<p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, in<br>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, in<br>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, in
</p>
`;
ul.classList.add('comon')
const ssss= document.getElementById('ulli')
ssss.appendChild(ul);
document.getElementsByTagName('p').style.color='red'










