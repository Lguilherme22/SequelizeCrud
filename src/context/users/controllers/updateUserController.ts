import updateUserUseCase from "../../../use-cases/updateUser";

export default function updateUserController(repository) {
  return async (req, res) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await updateUserUseCase(userId, req.body, repository);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  };
}
