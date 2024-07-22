const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // Redirects the user to the login page if not logged in
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
