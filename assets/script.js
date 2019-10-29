const signupSection = document.getElementById('email-section');
const signupForm = document.getElementById('email-signup');
const signupField = document.getElementById('email-input');
const signupSubmit = document.getElementById('email-submit');
const error = document.querySelector('.alert-error');
const success = document.querySelector('.alert-success');

function submitEmail() {
	if(signupField.value === "") {
		error.classList.add('alert-show');
	}
	else {
		signupSection.classList.add('hide');
		success.classList.add('alert-show');
	}
}

signupForm.addEventListener('submit', e => {
	e.preventDefault();

	submitEmail();
});

signupField.addEventListener('blur', function (event){
  isValidEmail = signupField.checkValidity();

  !isValidEmail ? error.classList.add('alert-show') : error.classList.remove('alert-show');
});
