import express from "express";
import { getAllUsersController } from "../controllers";

export default function getAllUsersRoute(repository) {
  const router = express.Router();

  router.get("/", getAllUsersController(repository));

  return router;
}
