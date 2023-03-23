import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Admin = db.define(
  "admin",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    userType: {
      type: DataTypes.INTEGER,
    }
  },
  {
    freezeTableName: true,
  }
);
    
// (async () => {
//   await db.sync({ force: true }); // This will drop and recreate the table if it already exists
//   console.log("Admin table created!");

//   // Call the association function here
//   Admin.associate(db.models);
// })();

export default Admin;
