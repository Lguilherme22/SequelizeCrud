import createUserUseCase from "../../use-cases/createUser";
import getAllUsersUseCase from "../../use-cases/getUsers";
import getUserByIdUseCase from "../../use-cases/getUserID";
import updateUserUseCase from "../../use-cases/updateUser";
import deleteUserUseCase from "../../use-cases/deleteUser";

export function createUserController(repository) {
  return async (req, res) => {
    try {
      const user = await createUserUseCase(req.body, repository);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error ? error.message : "Erro inesperado",
      });
    }
  };
}

export function getAllUsersController(repository) {
  return async (_req, res) => {
    const users = await getAllUsersUseCase(repository);
    return res.json(users);
  };
}

export function getUserByIdController(repository) {
  return async (req, res) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await getUserByIdUseCase(userId, repository);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  };
}

export function updateUserController(repository) {
  return async (req, res) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await updateUserUseCase(userId, req.body, repository);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(user);
  };
}

export function deleteUserController(repository) {
  return async (req, res) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const deleted = await deleteUserUseCase(userId, repository);
    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(204).send();
  };
}
