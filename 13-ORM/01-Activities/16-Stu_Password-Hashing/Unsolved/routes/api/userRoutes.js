const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
router.post('/login', async (req, res) => {
  try {
    // Search the database for a user with the provided email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // If the email doesn't exist in the database, an error message is sent to user
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }

    // compare() method is used to check that the provided password is correct 
    // by comparing the encrypted versions
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    // If they do not match, an error message is sent to the user
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    // If they do  match, a success message is sent to the user
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
