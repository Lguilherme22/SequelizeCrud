import express from "express";
import requestValidator from "../validators/requestValidator";
import { createUserController } from "../controllers";

export default function createUserRoute(repository) {
  const router = express.Router();

  router.post("/", requestValidator, createUserController(repository));

  return router;
}
