import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import QuizCat from './QuizCat.js';

const { DataTypes } = Sequelize;

const Quiz = db.define(
  "quiz",
  {
    question: {
      type: DataTypes.STRING,
    },
    answer1: {
      type: DataTypes.STRING,
    },
    answer2: {
      type: DataTypes.STRING,
    },
    answer3: {
      type: DataTypes.STRING,
    },
    answer4: {
      type: DataTypes.STRING,
    },
    correctAnswer: {
      type: DataTypes.STRING,
    },
    quizbelong: {
      type: DataTypes.INTEGER,
      references: {
        model: QuizCat,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Quiz.associate = function () {
  Quiz.belongsTo(QuizCat, { foreignKey: "quizbelong" });
};

export default Quiz;