import express from "express";
import sequelize from "./db/database";
import userRoutes from "./context/routes/userRoutes";

const app = express();

app.use(express.json());
app.use(userRoutes);

sequelize.sync();

export default app;