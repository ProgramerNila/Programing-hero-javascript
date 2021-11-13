const loadUser = () => {
    fetch('https://randomuser.me/api/?results=6')
        .then(res => res.json())
        .then(data=>displayUser(data))
}
loadUser()

const displayUser= (usersInfo)=>{
    console.log(usersInfo);
    const userDataDiv = document.getElementById('userData');
    const userResults= usersInfo.results
    for (const user of userResults) {
        const div = document.createElement('div');
        const [{ gender, name:{ first, last, title } , email, location:{city,street:{number,name}} }] = userResults;
        div.innerHTML = `
        <h4>${gender} ${email}</h4>
        <p>${title} ${first} ${last} ${city} ${number} ${name}</p>
        
        `
        userDataDiv.appendChild(div)
    }
}











