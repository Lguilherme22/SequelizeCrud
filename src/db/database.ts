import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "crud_db",
    "postgres",
    "password",
    {
  host: "localhost",
  dialect: "postgres",
  port: 5090,
  logging: false,
});

export default sequelize;