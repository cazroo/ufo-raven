const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const session = { session: false };

//======================= register user =======================

// takes the authenticate req and returns a response
const register = async (req, res, next) => {
  try {
    req.user.name
      ? res.status(201).json({ msg: "User registered", user: req.user })
      : res.status(401).json({ msg: "User already exists" });
  } catch (error) {
    next(error);
  }
};

// register router - authenticate using registerStrategy( names 'register') and passes on the register function defined above.
router.post(
  "/registeruser",
  passport.authenticate("register", session),
  register
);





module.exports = router;
