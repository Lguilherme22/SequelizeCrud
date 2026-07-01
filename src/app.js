const express = require("express");

const sequelize = require("./db/database");
const userRoutes = require("./context/routes/userRoutes");

const app = express();

app.use(express.json());

app.use(userRoutes);

sequelize.sync();

module.exports = app;