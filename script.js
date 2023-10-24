var countryName = document.querySelector("#countryName");
var flag = document.querySelector("#flag");

var countryContainer = document.querySelector("#countryContainer");
var cardCollection = document.getElementsByClassName("card");
 


var x = 5;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08de0fa1b3mshc88eaff21fbf380p15fd7fjsn2fdca5c03488',
		'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
	}
};

fetch('https://rest-country-api.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => {console.log(response[0])

		// countryName.textContent = response[235].name.common;
		// flag.setAttribute("src", response[235].flags[1])
		// flag.setAttribute("alt", "flag")
		

		
		for(var i = 0; i < response.length; i++){

			var newCard = document.createElement('div');
			newCard.classList.add("card");
			var country = document.createElement('h4');

			var countryFlag = document.createElement('img');
			var countryText = document.createTextNode(response[i].name.common);
		country.id = "countryName";
		country.appendChild(countryText);
		countryFlag.id = 'flag';
		countryFlag.src = response[i].flags[1];
		countryFlag.alt = "flag";
		newCard.appendChild(country);

		newCard.appendChild(countryFlag);
		
		countryContainer.appendChild(newCard);
		// cardCollection[i].addEventListener("click",function(){
		// 	console.log(linkEx);
		// 	localStorage.setItem("value",linkEx);
		// 	window.location.href = "country.html";
		// });

		}
		
		


		for(var j = 0; j < cardCollection.length; j++){
			cardCollection[j].addEventListener('click',function(){
				console.log(this.children[0].innerText);
				localStorage.setItem("value",String(this.children[0].innerText).toLowerCase());
				window.location.href = "country.html";
			});
		}
		 })
		 

	.catch(err => {console.error(err)
		countryName.innerText = "Error, unable to load..."});
	
	


//console.log(x);

//localStorage.setItem("value",x);