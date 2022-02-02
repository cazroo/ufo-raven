const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../connection");
const bcrypt = require("bcrypt");
const hash = require("../hash");

const User = connection.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { indexed: [{ unique: true, fields: ["name"] }] }
);

module.exports = User;
