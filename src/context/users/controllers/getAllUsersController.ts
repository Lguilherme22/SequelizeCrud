import getAllUsersUseCase from "../../../use-cases/getUsers";

export default function getAllUsersController(repository) {
  return async (_req, res) => {
    const users = await getAllUsersUseCase(repository);
    return res.json(users);
  };
}
