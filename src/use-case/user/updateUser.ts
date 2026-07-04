import { Request, Response } from "express";
import User from "../../repositories/Users";

export default async (req: Request, res: Response) => {
  const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  await user.update(req.body);
  return res.json(user);
};