import { Request, Response } from "express";
import { createUser } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
    const user = await createUser();
    res.status(200).json({
        status: "success",
        data: user,
    });
};
