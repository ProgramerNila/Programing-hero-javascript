const loadData = () => {

    const inputField = document.getElementById('searchArea');
    const inputValue = inputField.value;
    inputField.value=''



    // Load Data
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.teams))
    
    
    
}

const displayData = names => {
    console.log(names);
    const container = document.getElementById('cards-container');
    names.forEach(element => {
        const div = document.createElement('div');
        const { idTeam, strStadiumDescription } = element;
        container.textContent=''
        div.innerHTML = `
        <div class="row row-cols-2 row-cols-md-4 g-4">
        <div class="col">
          <div onclick='openLink(${element.idTeam})' class="card">
            <div class="card-body">
              <h5 class="card-title">${idTeam}</h5>
              <p class="card-text">${strStadiumDescription}.</p>
            </div>
          </div>
        </div>
        </div>
        `;
        container.appendChild(div)
    });
}

const openLink = link => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${link}`;
    fetch(url)
        .then(res => res.json())
    .then(data=>console.log(data.teams))
}

const showSinglePage = newPage => {
   
}

window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    console.log(loader);
    //
    loader.classList.add('hidden');
     loader.className += ' ki ji kiser jonno';
});




