const { DataTypes } = require("sequelize");
const connection = require("../connection");

const Location = connection.define("location", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {indexed : [{unique: true, fields: ["name"]}]}
)


module.exports = Location;