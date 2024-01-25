'user strict';

const form = document.querySelector('form');
const messageContainer = document.querySelector('#message-container');
const message = document.querySelector('#message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
	// using contraint API
	isValid = form.checkValidity();

	// check the whole fields
	if (!isValid) {
		message.textContent = 'Please fill out all fields.';
		message.style.color = 'red';
		return;
	}

	// check to see if the password matches
	if (form.password.value === form.confirmPassword.value) {
		passwordMatch = true;
		form.password.style.borderColor = 'green';
		form.confirmPassword.style.borderColor = 'green';
	} else {
		passwordMatch = false;
		message.textContent = 'Make sure passwords match.';
		message.style.color = 'red';
		form.password.style.borderColor = 'red';
		form.confirmPassword.style.borderColor = 'red';
		return;
	}

	if (isValid && passwordMatch) {
		message.textContent = 'Successfully Registered!';
		message.style.color = 'green';
		return;
	}
}

function storeFormData() {
	const user = {
		name: form.name.value,
		phone: form.phone.value,
		email: form.email.value,
		website: form.website.value,
		password: form.password.value,
	};

	// do something on the server side
	console.log('user', user);
}

function submmiteHandler(e) {
	e.preventDefault();

	// validate the form
	validateForm();

	// submit data if valid
	if (isValid && passwordMatch) storeFormData();
}

form.addEventListener('submit', submmiteHandler);
