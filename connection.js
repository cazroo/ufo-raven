const { Sequelize } = require("sequelize");

let connection;
if (process.env.NODE_ENV === "production") {
  connection = new Sequelize(`${process.env.DATABASE_URL}?sslmode=no-verify`, {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
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
