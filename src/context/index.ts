import express from "express";
import createUserRoutes from "./users";

export default function createContextRouter({ userRepository }) {
	const router = express.Router();

	router.use("/users", createUserRoutes(userRepository));

	return router;
}

