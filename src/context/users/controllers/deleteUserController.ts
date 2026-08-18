import deleteUserUseCase from "../../../use-cases/deleteUser";

export default function deleteUserController(repository) {
  return async (req, res) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const deleted = await deleteUserUseCase(userId, repository);

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(204).send();
  };
}
