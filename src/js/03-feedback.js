const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const LOCAL_MESSAGE = 'feedback-form-state';

const updateState = _.throttle(function () {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LOCAL_MESSAGE, JSON.stringify(state));
}, 500);

form.addEventListener('input', updateState);

window.addEventListener('load', function () {
  const savedState = localStorage.getItem(LOCAL_MESSAGE);
  if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem(LOCAL_MESSAGE);
  e.target.reset();
  
  console.log(state);
});
