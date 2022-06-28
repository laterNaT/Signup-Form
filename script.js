const passwordInputs = document.querySelectorAll('.valid-password');
const password = document.querySelector('.password');
const invalidInput = document.createElement('p');
invalidInput.textContent = '* Passwords do not match.';
invalidInput.style.color = 'red';
invalidInput.style.padding = '0';

// check if password and confirm password is same
// if input value is not the same show a red border
// and display an error text.
passwordInputs.forEach(e => {
  e.addEventListener('input', () => {
    if (passwordInputs[0].value !== passwordInputs[1].value) {
      if (!passwordInputs[0].value || !passwordInputs[1].value) {
        passwordInputs[0].classList.add('invalid-password');
        passwordInputs[0].after(invalidInput);
        passwordInputs[1].classList.add('invalid-password');
      }
    } else {
      passwordInputs[0].classList.remove('invalid-password');
      passwordInputs[0].nextSibling.remove();
      passwordInputs[1].classList.remove('invalid-password');
    }
  });
});
