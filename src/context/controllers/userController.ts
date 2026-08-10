import { Request, Response } from "express";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserData } from "../../domain/entities/User";
import createUserUseCase from "../../use-case/user/createUser";
import getAllUsersUseCase from "../../use-case/user/getUsers";
import getUserByIdUseCase from "../../use-case/user/getUserID";
import updateUserUseCase from "../../use-case/user/updateUser";
import deleteUserUseCase from "../../use-case/user/deleteUser";

export function createUserController(repository: IUserRepository) {
  return async (req: Request, res: Response) => {
    try {
      const user = await createUserUseCase(req.body as UserData, repository);
      return res.status(201).json(user);
    } catch (error: unknown) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro inesperado",
      });
    }
  };
}

export function getAllUsersController(repository: IUserRepository) {
  return async (_req: Request, res: Response) => {
    const users = await getAllUsersUseCase(repository);
    return res.json(users);
  };
}

export function getUserByIdController(repository: IUserRepository) {
  return async (req: Request, res: Response) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await getUserByIdUseCase(userId, repository);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  };
}

export function updateUserController(repository: IUserRepository) {
  return async (req: Request, res: Response) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await updateUserUseCase(userId, req.body as Partial<UserData>, repository);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  };
}

export function deleteUserController(repository: IUserRepository) {
  return async (req: Request, res: Response) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const deleted = await deleteUserUseCase(userId, repository);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(204).send();
  };
}
