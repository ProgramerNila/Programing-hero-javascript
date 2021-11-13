const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
    .then(data=>dispalayData(data))
}
loadData();

const dispalayData = ukti => {
    const container = document.getElementById('container');
    const p = document.createElement('h3');
    p.innerText = `${ukti.quote}`;
    container.appendChild(p);
}

