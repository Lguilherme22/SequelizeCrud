import UserModel from "../db/models/UserModel";

export default class UserRepository {
  async create(user) {
    const created = await UserModel.create(user);
    return created.toJSON();
  }

  async findAll() {
    const users = await UserModel.findAll();
    return users.map((user) => user.toJSON());
  }

  async findById(id) {
    const user = await UserModel.findByPk(Number(id));
    return user ? user.toJSON() : null;
  }

  async update(id, data) {
    const user = await UserModel.findByPk(Number(id));
    if (!user) return null;
    await user.update(data);
    return user.toJSON();
  }

  async delete(id) {
    const user = await UserModel.findByPk(Number(id));
    if (!user) return false;
    await user.destroy();
    return true;
  }
}
