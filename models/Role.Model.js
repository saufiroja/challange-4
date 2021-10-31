const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Role extends Model {
  static associations(models) {
    Role.belongsTo(models.User, { onDelete: "CASCADE", onUpdate: "CASCADE" });
  }
}

Role.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "Roles",
    timestamps: true,
  }
);

module.exports = Role;
