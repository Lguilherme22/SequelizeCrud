import express from "express";
import createUserRoute from "./createUser";
import getAllUsersRoute from "./getAllUsers";
import getUserByIdRoute from "./getUserById";
import updateUserRoute from "./updateUser";
import deleteUserRoute from "./deleteUser";

export default function createUserRoutes(repository) {
  const router = express.Router();

  router.use("/", getAllUsersRoute(repository));
  router.use("/", getUserByIdRoute(repository));
  router.use("/", createUserRoute(repository));
  router.use("/", updateUserRoute(repository));
  router.use("/", deleteUserRoute(repository));

  return router;
}
