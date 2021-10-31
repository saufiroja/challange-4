const Sequelize = require("sequelize");
const config = require("../config/config");
// const db = {};

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    port: parseInt(config.development.port, 10),
    dialect: config.development.dialect,
  }
);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = sequelize;
