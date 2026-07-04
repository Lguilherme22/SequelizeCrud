import { Request, Response } from "express";
import User from "../../repositories/Users";

export default async (req: Request, res: Response) => {
  const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const users = await User.findByPk(userId);
  return res.json(users);
};