require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");

const userRouter = require("./routes/user");
const reportRouter = require("./routes/report");
const ufoRouter = require("./routes/routesUFO");
const adminRouter = require("./routes/admin");
const locationRouter = require("./routes/location");

const {
  registerStrategy,
  loginStrategy,
  verifyStrategy,
} = require("./middleware/auth");

const User = require("./models/user");
const Report = require("./models/report");
const Location = require("./models/location");
const connection = require("./connection");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/report", reportRouter);
app.use("/location", locationRouter);
app.use("/ufo", ufoRouter);
app.use("/admin", adminRouter);

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);
passport.use(verifyStrategy);

app.listen(process.env.PORT || process.env.PORT2, async() => {
  try {
    await connection.authenticate();
    await User.sync({ alter: true });
    await Location.sync({alter: true});
    await Report.sync({ alter: true });
    console.log("App is online");
  } catch(error){
    console.log(error);
  }
});
