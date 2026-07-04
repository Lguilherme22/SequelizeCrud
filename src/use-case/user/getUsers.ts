import { Request, Response } from "express";
import User from "../../repositories/Users";

export default async (_req: Request, res: Response) => {
  const users = await User.findAll();
  return res.json(users);
};