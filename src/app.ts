import express from "express";

import userRoutes from "./context/routes/userRoutes";
import sequelize from "./db/database";

const app = express();

app.use(express.json());
app.use(userRoutes);

sequelize.sync().catch((error: unknown) => {
	console.error("falha na conexão.", error);
});

export default app;