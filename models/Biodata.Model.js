const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Biodata extends Model {
  static associations(models) {
    Biodata.belongsTo(models.User, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }
}

Biodata.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Biodatas",
    modelName: "Biodata",
    timestamps: true,
  }
);

module.exports = Biodata;
