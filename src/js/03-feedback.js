import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
const inputForm = {
  email: '',
  message: '',
};
formEl.addEventListener('input', throttle(onInputData, 500));
formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (
    formEl.elements.email.value === '' ||
    formEl.elements.message.value === ''
  ) {
    return alert('Please fill in all the fields!');
  }

  console.log({
    email: formEl.elements.email.value,
    message: formEl.elements.message.value,
  });
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputData(e) {}
