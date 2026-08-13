import getUserByIdUseCase from "../../../use-cases/getUserID";

export default function getUserByIdController(repository) {
  return async (req, res) => {
    const userId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const user = await getUserByIdUseCase(userId, repository);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  };
}
