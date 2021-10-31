const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class User extends Model {
  static associations(models) {
    User.Roles = User.hasMany(models.Role);
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Not a valid email address",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 50],
          msg: "Password min length 8 character",
        },
      },
    },
  },
  {
    sequelize,
    tableName: "Users",
    modelName: "User",
    timestamps: true,
  }
);

module.exports = User;
