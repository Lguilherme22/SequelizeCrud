import { Request, Response } from "express";

import User from "../../repositories/Users";

type UserIdParams = {
    id: string;
};

const deleteUser = async (
    req: Request<UserIdParams>,
    res: Response
): Promise<Response> => {
    const user = await User.findByPk(req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    await user.destroy();
    return res.status(204).send();
};

export default deleteUser;