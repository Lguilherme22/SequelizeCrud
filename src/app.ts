import express from "express";
import sequelize from "./infrastructure/db/database";
import routes from "./context/routes";

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync();

export default app;