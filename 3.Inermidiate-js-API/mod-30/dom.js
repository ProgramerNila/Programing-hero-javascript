document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '4px solid red';
})




document.getElementById('Add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const div = document.createElement('div');
    div.classList.add('friends');
    div.innerHTML=`<h2 class='name'>friend-5</h2>
    <p>Sed, dolores dicta.</p>`
    container.appendChild(div)
})
document.getElementById('add-background').addEventListener('click', function () {
    const allFriends = document.getElementsByClassName('friends');
    for (const friend of allFriends) {
        friend.style.backgroundColor='lightblue'
    }
})
document.getElementById('add-color').addEventListener('click', function () {
    const allFriends = document.getElementsByClassName('name');
    for (const friend of allFriends) {
        friend.style.color='red'
    }
})






function getSum(a, b=9){return a+b;} console.log(getSum(2, 7));