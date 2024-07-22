const router = require("express").Router();
const User = require("../models/User.js");

router.get("/", async (req, res) => {
  // TODO: Render template with Sequelize data
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render("homepage", { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
