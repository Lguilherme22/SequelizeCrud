import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserData } from "../../domain/entities/User";

export default async function getAllUsers(
  repository: IUserRepository,
): Promise<UserData[]> {
  return repository.findAll();
}
