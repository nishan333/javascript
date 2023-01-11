// get references to the form and message element
const form = document.getElementById('order-form');
const message = document.getElementById('message');

// add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();

  // get the form data
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const product = form.elements.product.value;
  const quantity = form.elements.quantity.value;

  // check that all fields are filled out
  if (!name || !email || !product || !quantity) {
    message.textContent = 'Please fill out all fields.';
    return;
  }

  // construct the message to display
  const orderMessage = `Thank you for your order, ${name}! You ordered ${quantity} of ${product}. We will send a confirmation email to ${email}.`;

  // display the message
  message.textContent = orderMessage;

  // clear the form
  form.reset();
});
