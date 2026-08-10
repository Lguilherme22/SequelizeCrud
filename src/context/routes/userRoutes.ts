import express from "express";
import UserRepository from "../../infrastructure/repositories/UserRepository";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  deleteUserController,
} from "../controllers/userController";
import requestValidator from "../validators/requestValidator";

const router = express.Router();
const userRepository = new UserRepository();

router.get("/users", getAllUsersController(userRepository));
router.get("/users/:id", getUserByIdController(userRepository));
router.post("/users", requestValidator, createUserController(userRepository));
router.put("/users/:id", requestValidator, updateUserController(userRepository));
router.delete("/users/:id", deleteUserController(userRepository));

export default router;