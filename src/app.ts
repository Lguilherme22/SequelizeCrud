import express from "express";
import createContextRouter from "./context";
import UserRepository from "./repositories/UserRepository";

const app = express();
const userRepository = new UserRepository();
const routes = createContextRouter({ userRepository });

app.use(express.json());
app.use(routes);

export default app;