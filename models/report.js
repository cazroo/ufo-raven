const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");

const Report = connection.define("reports", {
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