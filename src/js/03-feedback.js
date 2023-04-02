const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const updateState = _.throttle(function () {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

form.addEventListener('input', function () {
  updateState();
});

window.addEventListener('load', function () {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState !== null) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';

  console.log(state);
});
