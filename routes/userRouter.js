const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const router = express.Router();

//Register User
router.route("/register").post(userCtrl.registerUser);

//Login User
router.route("/login").post(userCtrl.loginUser);

//verify Token
router.route('/verify').get(userCtrl.verifiedToken);

module.exports = router