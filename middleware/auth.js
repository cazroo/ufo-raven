const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const JWTStrategy = require("passport-jwt").Strategy;

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

const login = async (name, password, next) => {
  try {
    const user = await User.findOne({where: {name: name}});
    if (!user) {
      return next(null, null, { message: "Incorrect name" });
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    return match ? next(null, user) : next(null, null, { message: "Incorrect password" });
  } catch (error) {
    next(error);
  }
};

const verify = (token, next) => {
    try {
        next(null, token.user);
    } catch (error) {
        next(error);
    }
};

const verifyStrategy = new JWTStrategy({
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token")
}, verify);

const loginStrategy = new LocalStrategy(mappings, login);

module.exports = {
  registerStrategy,
  loginStrategy,
  verifyStrategy,
};