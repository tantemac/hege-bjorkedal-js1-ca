const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const brewDogUrl = "https://api.punkapi.com/v2/beers/" + id;

console.log(brewDogUrl);

async function getBeerBYId() {
	try {
		const response = await fetch(brewDogUrl);
		const data = await response.json();
		const beerDetails = data[0];

		const title = document.querySelector("h1");
		const image = document.querySelector(".details-image");
		const paragraphParent = document.querySelector(".detail-details");
		const paragraphs = paragraphParent.querySelectorAll("p");
		const properties = paragraphParent.querySelectorAll(".value");

		console.log("details", beerDetails);
		title.innerHTML = beerDetails.name;

		image.src = beerDetails.image_url;

		console.log("log paragraphs", paragraphs);
		paragraphs[0].firstChild.data = "Food-pairing: ";
		paragraphs[1].firstChild.data = "Brewers tips: ";
		properties[0].innerHTML = beerDetails.food_pairing;
		properties[1].innerHTML = beerDetails.brewers_tips;
	} catch (error) {
		title.innerHTML = "Ooops... This is not working";
		console.log(error);
	}
}
getBeerBYId();
