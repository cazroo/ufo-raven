const router = require("express").Router();
const User = require("../models/user");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Report = require("../models/report");
const Location = require("../models/location");
const { Sequelize } = require("sequelize");

const session = { session: false };

//======================= register user ======================= (checked & worked)

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

// login (checked & worked)

const login = async (req, res, next) => {
  passport.authenticate("login", (error, user) => {
    try {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
      } else if (!user) {
        res.status(401).json({ msg: "401 not found." });
      } else {
        const loginFn = (error) => {
          if (error) {
            return next(error);
          } else {
            const userData = { id: user.id, name: user.name };
            const data = {
              user,
              token: jwt.sign({ user: userData }, process.env.SECRET_KEY),
            };
            res.status(200).json(data);
          }
        };

        req.login(user, session, loginFn);
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next); //IFFY - Immediately Invoked Function Expression
};

router.post("/login", login);

// get all users (checked & worked)

router.get("/getallusers", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "createdAt", "updatedAt"],
  });
  res.status(200).json({ msg: "worked", data: allUsers });
});

router.get("/:id", async (req, res) => {
  const user = await User.findAll({
    where: { id: req.params.id },
    include: [
      {
        model: Report,
        attributes: ["date", "description"], // <----- Add this line
        include: [
          {
            attributes: ["name"], // <----- Add this line
            model: Location,
            required: true,
          },
        ],
      },
    ],
  });

  res.status(200).json(user);
});

module.exports = router;
