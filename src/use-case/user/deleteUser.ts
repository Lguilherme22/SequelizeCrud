import { IUserRepository } from "../../domain/repositories/IUserRepository";

export default async function deleteUser(
  id: string,
  repository: IUserRepository,
): Promise<boolean> {
  return repository.delete(id);
}
