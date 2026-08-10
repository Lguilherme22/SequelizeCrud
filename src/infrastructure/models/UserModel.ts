import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/database";

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public age!: number;
  public email!: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Users",
    timestamps: false,
  }
);

export default UserModel;
