import { Request, Response } from "express";

import User from "../../repositories/Users";

type UserIdParams = {
    id: string;
};

const updateUser = async (
    req: Request<UserIdParams>,
    res: Response
): Promise<Response> => {
    const user = await User.findByPk(req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    await user.update(req.body);
    return res.json(user);
};

export default updateUser;