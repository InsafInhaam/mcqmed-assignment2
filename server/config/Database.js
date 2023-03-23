import { Sequelize } from "sequelize";

const db = new Sequelize("assignment2", "root", "", {
  host: "localhost",
  dialect: "mysql",
})

if(db){
    console.log("Database connection started");
}

export default db;