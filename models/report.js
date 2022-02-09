const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");
const Location = require("./location");
const User = require("./user");

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
Report.belongsTo(User)
User.hasMany(Location)
Location.belongsTo(User)

Location.hasMany(Report);
User.hasMany(Report);



module.exports = Report;