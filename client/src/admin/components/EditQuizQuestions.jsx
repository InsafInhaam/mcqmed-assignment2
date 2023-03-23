import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const EditQuizQuestions = () => {
  const location = useLocation();
  const history = useNavigate();
  const quizQuestionId = location.pathname.split("/")[2];

  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [quizBelong, setQuizBelong] = useState("");
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/GetQuizCat", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setQuizzes(result);
      });
  }, [quizzes]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL + "/api/GetQuizById/" + quizQuestionId,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setQuestion(result[0].question);
        setAnswer1(result[0].answer1);
        setAnswer2(result[0].answer2);
        setAnswer3(result[0].answer3);
        setAnswer4(result[0].answer4);
        setCorrectAnswer(result[0].correctAnswer);
        setQuizBelong(result[0].quizBelong);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !question ||
      !answer1 ||
      !answer2 ||
      !answer3 ||
      !answer4 ||
      !quizBelong ||
      !correctAnswer
    ) {
      return toast.error("Please fill all required fields");
    }

    fetch(process.env.REACT_APP_API_URL + "/api/updateQuiz/" + quizQuestionId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        question,
        answer1,
        answer2,
        answer3,
        answer4,
        correctAnswer,
        quizbelong: quizBelong,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          history("/quizquestions");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header">
                    <h4 className="modal-title">Edit New Quiz</h4>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="correctAnswer">
                        Which Quiz does question:
                      </label>
                      <select
                        id="correctAnswer"
                        value={quizBelong}
                        onChange={(event) => setQuizBelong(event.target.value)}
                        required
                        className="form-control"
                      >
                        <option value="" disabled>
                          Select an answer
                        </option>
                        {quizzes.map((item) => (
                          <option value={item.id}>{item.quiz_title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      {" "}
                      <label htmlFor="question">Question:</label>
                      <input
                        id="question"
                        type="text"
                        value={question}
                        onChange={(event) => setQuestion(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="answer1">Answer 1:</label>
                      <input
                        id="answer1"
                        type="text"
                        value={answer1}
                        onChange={(event) => setAnswer1(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="answer2">Answer 2:</label>
                      <input
                        id="answer2"
                        type="text"
                        value={answer2}
                        onChange={(event) => setAnswer2(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="answer3">Answer 3:</label>
                      <input
                        id="answer3"
                        type="text"
                        value={answer3}
                        onChange={(event) => setAnswer3(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="answer4">Answer 4:</label>
                      <input
                        id="answer4"
                        type="text"
                        value={answer4}
                        onChange={(event) => setAnswer4(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="correctAnswer">Correct Answer:</label>
                      <select
                        id="correctAnswer"
                        value={correctAnswer}
                        onChange={(event) =>
                          setCorrectAnswer(event.target.value)
                        }
                        required
                        className="form-control"
                      >
                        <option value="" disabled>
                          Select an answer
                        </option>
                        <option value="1">Answer 1</option>
                        <option value="2">Answer 2</option>
                        <option value="3">Answer 3</option>
                        <option value="4">Answer 4</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-success">
                        Edit Question
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
};

export default EditQuizQuestions;
