const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");

const Report = connection.define("Report", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.INTEGER,
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