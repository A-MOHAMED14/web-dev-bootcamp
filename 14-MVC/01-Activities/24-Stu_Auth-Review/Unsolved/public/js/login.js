const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  // Prevents the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // Retrieves the values entered in the email and password fields in the form
  // Also, removes any whitespaces
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
    // Makes a POST request to the server with the provied email & passowrd 
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
