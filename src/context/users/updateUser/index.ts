import express from "express";
import requestValidator from "../validators/requestValidator";
import { updateUserController } from "../controllers";

export default function updateUserRoute(repository) {
  const router = express.Router();

  router.put("/:id", requestValidator, updateUserController(repository));

  return router;
}
