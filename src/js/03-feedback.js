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
  console.log(e.elements.email.value);
}
function onInputData(e) {}
