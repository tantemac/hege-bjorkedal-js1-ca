const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
	event.preventDefault();
	console.log("The form was submitted");

	const yourName = document.querySelector("#name");
	const formError = document.querySelector("#nameError");
	const yourNameValue = yourName.value;

	if (checkInputLengthName(yourNameValue) === true) {
		formError.style.display = "none";
	} else {
		formError.style.display = "block";
	}

	const yourAnswer = document.querySelector("#answer");
	const answerError = document.querySelector("#answerError");
	const yourAnswerValue = yourAnswer.value;

	if (checkInputLengthAnswer(yourAnswerValue) === true) {
		answerError.style.display = "none";
	} else {
		answerError.style.display = "block";
	}

	const yourEmail = document.querySelector("#email");
	const emailError = document.querySelector("#emailError");
	const invalidEmailError = document.querySelector("#invalidEmailError");

	const emailValue = yourEmail.value;

	if (checkInputLengthEmail(emailValue) === true) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}

	if (validateEmail(emailValue) === true) {
		invalidEmailError.style.display = "none";
	} else {
		invalidEmailError.style.display = "block";
	}

	const yourAddress = document.querySelector("#address");
	const addressError = document.querySelector("#addressError");
	const yourAddressValue = yourAddress.value;

	if (checkInputLenghtAddress(yourAddressValue) === true) {
		addressError.style.display = "none";
	} else {
		addressError.style.display = "block";
	}
}

function checkInputLengthName(value) {
	const trimmedNameValue = value.trim();

	if (trimmedNameValue.length > 0) {
		return true;
	} else {
		return false;
	}
}

function checkInputLengthAnswer(value) {
	const trimmedAnswerValue = value.trim();

	if (trimmedAnswerValue.length > 9) {
		return true;
	} else {
		return false;
	}
}

function checkInputLengthEmail(value) {
	const trimmedEmailValue = value.trim();

	if (trimmedEmailValue.length > 0) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(yourEmail) {
	const regEx = /\S+@\S+\.\S+/;
	return regEx.test(email);
}

function checkInputLenghtAddress(value) {
	const trimmedAddressValue = value.trim();

	if (trimmedAddressValue.length > 14) {
		return true;
	} else {
		return false;
	}
}
