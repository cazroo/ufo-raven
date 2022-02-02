const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");

const mappings = { usernameField: "name", passwordField: "password" };

const register = async (name, password, next) => {
  try {
    if (!name || !password) {
      throw new Error("User info is missing");
    }
    // Creates salt to hash password.
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    // Password now hashes - return garbled string.
    const passwordHash = await bcrypt.hash(password, salt);

    try {
      // Creates user.
      const user = await User.create({ name: name, passwordHash: passwordHash });
      // Once created, next() passes to next function in the chain - register from routes/user.js
      next(null, user);
    } catch (error) {
      next(error, {});
    }
  } catch (error) {
    next(error);
  }
};

const registerStrategy = new LocalStrategy(mappings, register);

module.exports = {
  registerStrategy,
};
