import createUserUseCase from "../../../use-cases/createUser";

export default function createUserController(repository) {
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
