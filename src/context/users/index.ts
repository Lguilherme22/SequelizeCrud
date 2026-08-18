import express from "express";
import requestValidator from "./validators/requestValidator";
import {
	createUserController,
	getAllUsersController,
	getUserByIdController,
	updateUserController,
	deleteUserController,
} from "./controllers";

export default function createUserRoutes(repository) {
	const router = express.Router();

	router.get("/", getAllUsersController(repository));
	router.get("/:id", getUserByIdController(repository));
	router.post("/", requestValidator, createUserController(repository));
	router.put("/:id", requestValidator, updateUserController(repository));
	router.delete("/:id", deleteUserController(repository));

	return router;
}
