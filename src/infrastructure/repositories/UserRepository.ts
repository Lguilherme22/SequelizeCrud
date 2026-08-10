import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { UserData } from "../../domain/entities/User";
import UserModel from "../models/UserModel";

export default class UserRepository implements IUserRepository {
  async create(user: UserData): Promise<UserData> {
    const created = await UserModel.create(user as any);
    return created.toJSON();
  }

  async findAll(): Promise<UserData[]> {
    const users = await UserModel.findAll();
    return users.map((user) => user.toJSON());
  }

  async findById(id: string): Promise<UserData | null> {
    const user = await UserModel.findByPk(Number(id));
    return user ? user.toJSON() : null;
  }

  async update(id: string, data: Partial<UserData>): Promise<UserData | null> {
    const user = await UserModel.findByPk(Number(id));
    if (!user) return null;
    await user.update(data as any);
    return user.toJSON();
  }

  async delete(id: string): Promise<boolean> {
    const user = await UserModel.findByPk(Number(id));
    if (!user) return false;
    await user.destroy();
    return true;
  }
}
