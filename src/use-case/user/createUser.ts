import { Request, Response } from "express";

import User from "../../repositories/Users";

const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json(user);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unexpected error";
        return res.status(400).json(message);
    }
};

export default createUser;