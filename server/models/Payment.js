import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Payment = db.define(
  "payments",
  {
    itemName: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.STRING,
    },
    orderId: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

// (async () => {
//   await db.sync({ force: true }); // This will drop and recreate the table if it already exists
//   console.log("Payment table created!");

//   // Call the association function here
//   Payment.associate(db.models);
// })();

export default Payment;
