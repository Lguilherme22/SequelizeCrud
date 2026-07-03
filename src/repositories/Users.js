const { DataTypes } = require("sequelize");
const sequelize = require("../../src/db/database");

const User = sequelize.define("User", {

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }

});

module.exports = User;