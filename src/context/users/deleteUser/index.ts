import express from "express";
import { deleteUserController } from "../controllers";

export default function deleteUserRoute(repository) {
  const router = express.Router();

  router.delete("/:id", deleteUserController(repository));

  return router;
}
