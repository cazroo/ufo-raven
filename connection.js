// const mysql2 = require("mysql2");

// const connection = mysql2.createConnection(process.env.DB_URI);

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connect to the db");
// });



//2

const { Sequelize } = require("sequelize");
const connection = new Sequelize(process.env.DB_URI);

module.exports = connection;


//3

// const { Sequelize } = require("sequelize");

// let connection;

// if (process.env.NODE_ENV === "PRODUCTION") {
//   module.exports.connection = new Sequelize(
//     `${process.env.DATABASE_URL}?sslmode=no-verify`,
//     {
//         url: process.env.DB_URI,
//         dialect: "mysql",
//         dialectOptions: {
//             ssl: {
//                 rejectUnauthorized: false,
//             },
//         },
//     }
//   );
//   console.log('hello')
// } else {
//     connection = new Sequelize (process.env.DB_URI);
//     console.log("DB connection successful");
// }

// module.exports.default = connection;

