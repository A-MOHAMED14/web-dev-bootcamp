const logout = async () => {
  // TODO: Add a comment describing the functionality of this expression
  // Makes a POST request to the server to destroy the session
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // TODO: Add a comment describing the functionality of this statement
    // If successfully logged out, redirect the user to the login page
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
