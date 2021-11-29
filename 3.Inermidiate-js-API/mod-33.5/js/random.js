const loadData = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => showData(data.results));
};
loadData();
const showData = (name) => {
  const mainDiv = document.getElementById("ursers");
  name.forEach((element) => {
    console.log(element);
    const div = document.createElement("div");
    const {
      name: { title, first, last },
      gender,
        location: { city, coordinates: { latitude, longitude } },
        cell
    } = element;
    // const { title, first, last } =name;
    div.innerHTML = `
            <p> My Name Is ${title} ${first} ${last} </p>
            <p>I am a ${gender} Person</p>
            <p>My city name is ${city}</p>
            <p>lan: ${latitude} and long:${longitude} <br> <br> Call Me: ${cell}</p>
        `;

    mainDiv.appendChild(div);
  });
};
