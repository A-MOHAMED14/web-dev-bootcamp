const router = require("express").Router();
const User = require("../../models/User");

// TODO: Implement each of the three routes below using `async/await`
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// UPDATE a user
router.put("/:id", async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!req.body) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
