import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Quiz from "./Quiz.js";

const { DataTypes } = Sequelize;

const QuizCat = db.define(
  "quizcat",
  {
    quiz_title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

QuizCat.associate = function () {
  QuizCat.hasMany(Quiz, { foreignKey: "quizbelong" });
};

export default QuizCat;
