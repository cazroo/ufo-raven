const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Date = sequelize.define("Date", {
    date: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    start: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    end: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
    });

module.exports = Date;