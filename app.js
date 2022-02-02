require("dotenv").config();
const express = require("express");
const cors = require('cors');
const passport = require("passport");

const connection = require("./connection");
const User = require("./models/user");
const userRouter = require("./routes/user");
const { registerStrategy } = require("./middleware/auth");


app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.json({message:"Hello World"});
});

app.use("/user", userRouter);

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);

app.listen(process.env.PORT, () => {
    connection.authenticate();
    User.sync({ alter: true });
    console.log("App is online");
  });