import { Request, Response } from "express";

import User from "../../repositories/Users";

const getUsers = async (_req: Request, res: Response): Promise<Response> => {
    const users = await User.findAll();
    return res.json(users);
};

export default getUsers;