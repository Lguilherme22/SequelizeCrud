import express from "express";
import createUser from "../../use-case/user/createUser";
import getAllUsers from "../../use-case/user/getUsers";
import getUserById from "../../use-case/user/getUserID";
import updateUser from "../../use-case/user/updateUser";
import deleteUser from "../../use-case/user/deleteUser";
import requestValidator from "../../validator";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", requestValidator, createUser);
router.put("/users/:id", requestValidator, updateUser);
router.delete("/users/:id", deleteUser);

export default router;