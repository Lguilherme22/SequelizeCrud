import { UserData } from "../entities/User";

export interface IUserRepository {
  create(user: UserData): Promise<UserData>;
  findAll(): Promise<UserData[]>;
  findById(id: string): Promise<UserData | null>;
  update(id: string, data: Partial<UserData>): Promise<UserData | null>;
  delete(id: string): Promise<boolean>;
}
