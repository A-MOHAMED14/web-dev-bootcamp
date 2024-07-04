// TODO: Import express and call the Router method
const router = require("express").Router();

// TODO: Import modules for tips/feedback
const feedbackRouter = require("./feedback.js");
const tipsRouter = require("./tips.js");

// TODO: Use our routes
router.use("/feedback", feedbackRouter);
router.use("/tips", tipsRouter);

// TODO: Export app
module.exports = router;
