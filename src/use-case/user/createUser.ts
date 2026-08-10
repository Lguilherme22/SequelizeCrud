import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserData } from "../../domain/entities/User";

export default async function createUser(
  userData: UserData,
  repository: IUserRepository,
): Promise<UserData> {
  return repository.create(userData);
}
