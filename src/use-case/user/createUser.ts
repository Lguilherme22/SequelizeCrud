import { Request, Response } from "express";
import User from "../../repositories/Users";

export default async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error: unknown) {
    return res.status(400).json(error instanceof Error ? error.message : "Erro inesperado");
  }
};