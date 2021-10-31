const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class History extends Model {
  static associations(models) {
    History.belongsTo(models.User, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }
}

History.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    win: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lose: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "History",
    modelName: "History",
    timestamps: true,
  }
);

module.exports = History;
