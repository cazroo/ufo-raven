const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");
const Location = require("./location")

const Report = connection.define("reports", {
    date: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
        
    }
});


Report.belongsTo(Location);

Location.hasOne(Report);



module.exports = Report;