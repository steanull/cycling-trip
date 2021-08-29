const form = document.querySelector('.footer__form');
const button = form.querySelector('.footer__submit');
const footerInput = form.querySelector('.footer__email');

setSubmitButton(button, false)

function setSubmitButton(button, isValid) {
  if (isValid) {
    button.classList.add('footer__submit_active');
    footerInput.classList.add('footer__email_message_success');
  }
  else {
    button.classList.remove('footer__submit_active');
    footerInput.classList.remove('footer__email_message_success');
  }
}

button.addEventListener('click', (element) => getErrorMessage(element).textContent = "");

function getErrorMessage(element) {
  return document.querySelector(`.footer__valid[data-for="${element.name}"]`);
}

function checkInputValidity(element) {
  if (element.tagName !== "INPUT") return true;
  const validity = element.validity;
  console.log(validity);
  if(validity.valid) {
    getErrorMessage(element).textContent = "";
    return true;
  }
  if(validity.patternMismatch) {
    getErrorMessage(element).textContent = "Введен некорректный email";
    footerInput.classList.add('footer__email_message_error');
    return false;
  }

  if(validity.valueMissing) {
    getErrorMessage(element).textContent = "Обязательное поле";
    return false;
  }
}

function sendToValidate(form) {
  let x = [...form.elements].reduce((acc, el) => checkInputValidity(el) && acc, true);
  setSubmitButton(button, x);
}

form.addEventListener('input', () => sendToValidate(form));
