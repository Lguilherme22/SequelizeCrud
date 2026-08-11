import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "12345678",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5437,
    logging: false,
  },
);

export default sequelize;
