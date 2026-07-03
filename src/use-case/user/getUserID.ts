import { Request, Response } from "express";

import User from "../../repositories/Users";

type UserIdParams = {
    id: string;
};

const getUserById = async (
    req: Request<UserIdParams>,
    res: Response
): Promise<Response> => {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
};

export default getUserById;