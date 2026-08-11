import express from "express";
import sequelize from "./db/database";
import routes from "./context";

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync();

export default app;