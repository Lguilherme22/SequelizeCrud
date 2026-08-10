import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserData } from "../../domain/entities/User";

export default async function getUserById(
  id: string,
  repository: IUserRepository,
): Promise<UserData | null> {
  return repository.findById(id);
}
