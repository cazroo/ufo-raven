const { Sequelize } = require("sequelize");

let connection;
if (process.env.NODE_ENV === "production") {
  // heroku connection
} else if (process.env.NODE_ENV === "development") {
  connection = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
  });
} else if (process.env.NODE_ENV === "devsqlite") {
  connection = new Sequelize({
    dialect: "sqlite",
    storage: "data.db",
  });
}

module.exports = connection;
