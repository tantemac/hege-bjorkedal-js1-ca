function changeWords() {
	document.body.innerHTML = document.body.innerHTML.replace(/the/g, "banana");
	document.body.innerHTML = document.body.innerHTML.replace(/The/g, "Banana");
}

setInterval(changeWords, 3000);
