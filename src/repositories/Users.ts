import { DataTypes, Model, Optional } from "sequelize";

import sequelize from "../db/database";

export interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}


const User = sequelize.define<Model<UserAttributes>>(
    "User",
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
    }
);

export default User;