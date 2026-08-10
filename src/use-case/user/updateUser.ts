import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserData } from "../../domain/entities/User";

export default async function updateUser(
  id: string,
  data: Partial<UserData>,
  repository: IUserRepository,
): Promise<UserData | null> {
  return repository.update(id, data);
}
