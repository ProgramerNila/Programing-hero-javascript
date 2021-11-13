const loadData = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch(url)
        .then(res => res.json())
        .then(data =>displayData(data))
}



const displayData = comments => {
    const only10 = comments.slice(0, 30);
    console.log(only10);
    const container = document.getElementById('comments')
    only10.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `

        <div class="row row-cols-md-1 g-4">
            <div class="col p-3 mx-5">
              <div onclick='loadDetails("${element.id}")' class="card">
                <div class="card-body">
                  <h2 class="card-title">${element.id} number</h2>
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.body}</p>
                </div>
              </div>
            </div>
          </div>
            <h2></h2>
            <h3></h3>
            <p></p>
        `;
        container.appendChild(div)
    });

    
}

const loadDetails = id => {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  fetch(url)
      .then(res => res.json())
      .then(data =>openDedails(data))
}


const openDedails = (ids) => {
  console.log(ids);
  const open = document.getElementById('openUrl');
  const details = document.createElement('div');
  open.textContent=''
  details.innerHTML = `
  <div class="card-body">
                  <h2 class="card-title">${ids.id} number</h2>
                  <h5 class="card-title">${ids.name}</h5>
                  <p class="card-text">${ids.body}</p>
                </div>
  
  `
  open.appendChild(details)
}

