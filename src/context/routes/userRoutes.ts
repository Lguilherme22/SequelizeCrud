import { Router } from "express";

import requestValidator from "../../validator";
import createUser from "../../use-case/user/createUser";
import deleteUser from "../../use-case/user/deleteUser";
import getUserById from "../../use-case/user/getUserID";
import getAllUsers from "../../use-case/user/getUsers";
import updateUser from "../../use-case/user/updateUser";

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.post("/users", requestValidator, createUser);

router.put("/users/:id", requestValidator, updateUser);

router.delete("/users/:id", deleteUser);

export default router;