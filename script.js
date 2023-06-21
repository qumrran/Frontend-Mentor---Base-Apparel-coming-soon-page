const submitBtn = document.querySelector('button');
const iconAlert = document.querySelector('.error-icon');
const alertInfo = document.querySelector('.alert-info');
const input = document.querySelector('input');

submitBtn.addEventListener('click', function (event) {
	event.preventDefault();

	const email = input.value;

	if (validateEmail(email)) {
		alertInfo.style.display = 'block';
		alertInfo.style.color = 'var(--dark-grayish-red)';
		iconAlert.style.display = 'none';
		input.style.border = '3px solid var(--desaturated-red)';
		alertInfo.textContent = 'Thank you for subscribing';

		console.log('E-mail is valid. Proceed with password validation.');
	} else {
		alertInfo.style.display = 'block';
		iconAlert.style.display = 'block';
		input.style.border = '3px solid var(--soft-red)';
		alertInfo.style.color = 'var(--soft-red)';
		alertInfo.textContent = 'Please provide a valid email';

		console.log('Invalid e-mail. Please provide a valid email address.');
	}
});

input.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		submitBtn.click();
	}
});

function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email);
}
