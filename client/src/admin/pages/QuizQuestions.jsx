import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar";

const QuizQuestions = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/GetQuiz", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setQuizzes(result);
      });
  }, [quizzes]);

  const handleDelete = (id) => {
    fetch(process.env.REACT_APP_API_URL + "/api/deleteQuiz/" + id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(result.message);
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
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-xs-6">
                          <h2>
                            Manage <b>Quizes Questions</b>
                          </h2>
                        </div>
                        <div className="col-xs-6">
                          <a
                            href="/createquizquestions"
                            className="btn btn-success"
                            data-toggle="modal"
                          >
                            <i className="material-icons"></i>
                            <span>Add New Qiuz Questions</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="selectAll" />
                              <label htmlFor="selectAll" />
                            </span>
                          </th>
                          <th>Question</th>
                          <th>Anwers</th>
                          <th>Correct Anwers</th>
                          <th>Question Belongs</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {quizzes.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <span className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    id="checkbox1"
                                    name="options[]"
                                    defaultValue={1}
                                  />
                                  <label htmlFor="checkbox1" />
                                </span>
                              </td>
                              <td>{item.question}</td>
                              <td>
                                {item.answer1}, {item.answer2}, {item.answer3},{" "}
                                {item.answer4}
                              </td>
                              <td>
                                {item.correctAnswer == 1
                                  ? item.answer1
                                  : item.correctAnswer == 2
                                  ? item.answer2
                                  : item.correctAnswer == 3
                                  ? item.answer3
                                  : item.answer4}
                              </td>
                              <td>{item.quizbelong}</td>
                              <td>
                                <a
                                  href={`/editquizquestion/${item.id}`}
                                  className="edit"
                                  data-toggle="modal"
                                >
                                  <i
                                    className="material-icons"
                                    data-toggle="tooltip"
                                    title="Edit"
                                  >
                                    
                                  </i>
                                </a>
                                <a
                                  href="#"
                                  className="delete"
                                  data-toggle="modal"
                                  onClick={() => handleDelete(item.id)}
                                >
                                  <i
                                    className="material-icons"
                                    data-toggle="tooltip"
                                    title="Delete"
                                  >
                                    
                                  </i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
};

export default QuizQuestions;
