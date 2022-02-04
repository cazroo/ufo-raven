const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");

const Report = connection.define("reports", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    description: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
});

module.exports = Report;