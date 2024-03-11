const form = document.querySelector('#contact-form');
const response = document.querySelector('#response');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'send-email.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onload = () => {
    if (xhr.status === 200) {
      response.textContent = 'Your message has been sent!';
      response.style.color = 'green';
      form.reset();
    } else {
      response.textContent = 'An error occurred. Please try again.';
      response.style.color = 'red';
    }
  };
  xhr.send(`name=${name}&email=${email}&message=${message}`);
});