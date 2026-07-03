const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "crud_db",
    "postgres",
    "root",
    {
        host: "localhost",
        dialect: "postgres",
        port: 5432,
        logging: false
    }
);

module.exports = sequelize;