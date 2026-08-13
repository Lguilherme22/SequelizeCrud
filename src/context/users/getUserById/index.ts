import express from "express";
import { getUserByIdController } from "../controllers";

export default function getUserByIdRoute(repository) {
  const router = express.Router();

  router.get("/:id", getUserByIdController(repository));

  return router;
}
