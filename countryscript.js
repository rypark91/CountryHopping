var x = localStorage.getItem("value");
var countryName = document.querySelector("#countryName")
var neighbors = document.querySelector("#neighbors");
var capital = document.querySelector("#capital");
var carside = document.querySelector("#carside");
var continents = document.querySelector("#continents");
var currencies = document.querySelector("#currencies");
var languages = document.querySelector("#languages");
var coordinates = document.querySelector("#coordinates");
var map = document.querySelector("#map");
var population = document.querySelector("#population");
var subregion = document.querySelector("#subregion");

var flag = document.querySelector("#flag");

var container = document.querySelector("#resultContainer");
container.style.visibility = 'hidden';

var borderNames = document.getElementsByClassName("border");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08de0fa1b3mshc88eaff21fbf380p15fd7fjsn2fdca5c03488',
		'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
	}
};

fetch(`https://rest-country-api.p.rapidapi.com/${x}`, options)
	.then(response => response.json())
	.then(response => {console.log(response);
    
    var k = Object.keys(response.currencies)[0];
    countryName.textContent =  response.name.common;
    flag.src = response.flags[1];
    flag.alt = response.flags[1];
    for(var j = 0; j < response.borders.length; j++){
        neighbors.innerHTML += `<button class="border">${response.borders[j]}</button> `
    }
    for(var i = 0; i < borderNames.length; i++){
        borderNames[i].addEventListener('click',function(){
            localStorage.setItem("value",String(this.innerText));
            window.location.href = "country.html";
        });
    }
    container.style.visibility = 'visible';
    capital.innerHTML = response.capital;
    carside.innerHTML = response.car.side;
    continents.innerHTML = response.continents;
    currencies.innerHTML = response.currencies[k].name;
    languages.innerHTML = Object.values(response.languages);
    coordinates.innerHTML = response.latlng;
    map.innerHTML = `<a href="${response.maps.openStreetMaps}">Map</a>`;
    population.innerHTML = response.population.toLocaleString("en-US");
    subregion.innerHTML = response.subregion;
    })
	.catch(err => {console.error(err)
        countryName.innerText = "Error, country not found."});