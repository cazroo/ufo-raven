const { Sequelize, DataTypes } = require("sequelize");
const communication = require("../communication");

const Report = communication.define("Report", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.INT,
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