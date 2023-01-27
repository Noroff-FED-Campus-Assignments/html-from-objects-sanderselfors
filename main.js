document.querySelector("#app").innerHTML = `
<div>
    <h1>Hello everyone</h1>
</div>
`;

const pet = {
    type: "Dog",
    colour: "black",
    isHealthy: true,
    age: 5,
    name: "Fido",
};

function formatIsHealthy(isHealthy) {
    return isHealthy ? "Yes" : "No";
}

const petDetail = document.querySelector("#js-pet-detail");
petDetail.innerHTML = `
<h2 style="color: ${pet.colour}">${pet.type}</h2>
<p>Age: ${pet.age}</p>
<p>Healthy: ${pet.isHealthy}</p>
<p style="color: ${pet.colour}">Name: ${pet.name} </p>
`;

const snowmobiles = [
    {
    brand: "Yamaha",
    type: "Sidewinder",
    colour: "Blue",
    horsepower: 300,
    turbo: true,
},
{
    brand: "Yamaha",
    type: "Apex",
    colour: "Red",
    horsepower: 165,
    turbo: false,
},
{
    brand: "Ski-Doo",
    type: "Freeride",
    colour: "Black",
    horsepower: 180,
    turbo: true,
},
];

let html = "";

for (let i = 0; i < snowmobiles.length; i++){
    html += `<div class="Snowmobiles">
        <h2> ${snowmobiles[i].brand}</h2>
        <p>Type ${snowmobiles[i].type}</p>
        <p>Colour ${snowmobiles[i].colour}</p>
        <p>Horsepower ${snowmobiles[i].horsepower}</p>
        <p>Has turbo: ${snowmobiles[i].turbo}</p>
    </div>`;
}

document.querySelector("#snowmobiles").innerHTML = html;

const pets = [
    {
      name: "Cat",
    },
    {
      name: "Dog",
    },
    {
      name: "Mouse",
    },
    
  
  ];

function createPetsHTMLList(petsList) {
    let newHTML = "";

    for (const pets of petsList) {
        const petsHTML = `<li>${pets.name}<li/>`;
        newHTML += petsHTML;
    }
    return newHTML;
}

document.querySelector("#js-pets").innerHTML =
  createPetsHTMLList(pets);
