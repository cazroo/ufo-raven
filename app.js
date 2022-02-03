require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const userRouter = require("./routes/user");
const {
  registerStrategy,
  loginStrategy,
  verifyStrategy,
} = require("./middleware/auth");
const User = require("./models/user");
const connection = require("./connection");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);

app.listen(process.env.PORT || process.env.PORT2, () => {
  connection.authenticate();
  User.sync({ alter: true });
  console.log("App is online");
});
