import { Sequelize } from "sequelize";
import db from "./db.js";

export default db.define("user", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});