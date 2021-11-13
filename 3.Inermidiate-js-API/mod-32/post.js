function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispalyPost(data))
    
}

loadData()

function dispalyPost(posts) {
    console.log();
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>

        `
        postContainer.appendChild(div)
        // console.log(post);
    }
}

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);




