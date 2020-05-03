const brewDogUrl = "https://api.punkapi.com/v2/beers";

async function fetchBeer() {
	const heading = document.querySelector("h1");

	try {
		const response = await fetch(brewDogUrl);
		const beers = await response.json();
		displayBeer(beers);
		heading.innerHTML = "Brewdog Beer";
	} catch (error) {
		heading.innerHTML = "Ooops.. this is not working";
		console.log(error);
	}
}

fetchBeer();

function displayBeer(beers) {
	console.log(beers);

	const beerContainer = document.querySelector(".card");

	let html = "";

	for (let i = 0; i < beers.length; i++) {
		html += ` <div class="card">
                    <img class="image" src=${beers[i].image_url} alt="${beers[i].name}" />
                    <div class="details">
                        <h4 class="name">${beers[i].name}</h4>
                        <p><b>Tagline:</b>${beers[i].tagline}</p>
                        <p><b>Description:</b>${beers[i].description}</p>
                        <a class="btn btn-primary" href="details.html?id=${beers[i].id}">Details</a>
                    </div>
                </div>`;
	}
	const container = document.querySelector(".row");
	const loader = document.querySelector(".loader");
	container.removeChild(loader);

	beerContainer.innerHTML = html;
}
