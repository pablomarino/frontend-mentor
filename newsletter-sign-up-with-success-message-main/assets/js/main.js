function showSuscribe() {
  var signupWindow = document.getElementById('signup_window');
  var successMessage = document.getElementById('success_message');

  if (signupWindow) {
    signupWindow.style.display = 'flex';
  }

  if (successMessage) {
    successMessage.style.display = 'none';
  }
}

function showSuccess(email){
  var signupWindow = document.getElementById('signup_window');
  var successMessage = document.getElementById('success_message');
  var messageParagraph = document.getElementById('form_email');

  if (signupWindow) signupWindow.style.display = 'none';
  if (successMessage) successMessage.style.display = 'flex';
  if(form_email) messageParagraph.innerText = email;
}

window.addEventListener('load', function () {
  showSuscribe();
});

let timeout_id = null;

function submitForm(event) {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  var emailInput = document.getElementById('email');
  var emailValue = emailInput.value;
  var messageParagraph = document.getElementById('error_message');
  messageParagraph.innerText = '';
  messageParagraph.style.display = 'none';
  if (timeout_id) clearTimeout(timeout_id);

  if (validateEmail(emailValue)) {
    messageParagraph.innerText = '';
    messageParagraph.style.display = 'none';
  } else {
    messageParagraph.innerText = 'Invalid email address';
    messageParagraph.style.display = 'block';
    timeout_id = setTimeout(function () {
      messageParagraph.timer = messageParagraph.style.display = 'none';
    }, 2000);
  }
}

function validateEmail(email) {
  // Check if the string is empty
  if (email.trim() === '') {
    console.log('Email is empty.');
    return false;
  }

  // Check if it is a valid email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Invalid email format.');
    return false;
  }

  // String is not empty and is a valid email address
  console.log('Valid email address.');

  showSuccess(email);
  return true;
}
