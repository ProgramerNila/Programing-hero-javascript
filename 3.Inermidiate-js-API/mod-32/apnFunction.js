// # 32-5 Dynamically Display Loaded Data On Your Website




function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    .then(data=>usrs(data))
}

function usrs(users) {
    const ul = document.getElementById('user')
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)

    }
}



