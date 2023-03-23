import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const FinalQuiz = () => {
  const location = useLocation();
  const quizId = location.pathname.split("/")[2];
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/GetQuizByBelongId/" + quizId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setQuizQuestions(result);
      });
  }, [quizQuestions]);

  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* Page Content */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-center row">
                  <div className="col-md-10 col-lg-10">
                    <div className="border">
                      <div className="question bg-white p-3 border-bottom">
                        <div className="d-flex flex-row justify-content-between align-items-center mcq">
                          <h4>MCQ Quiz</h4>
                        </div>
                      </div>
                      {quizQuestions.map((item) => {
                        return (
                          <div
                            className="question bg-white p-3 border-bottom"
                            key={item.id}
                          >
                            <div className="d-flex flex-row align-items-center question-title">
                              <h3 className="text-danger">Q.</h3>
                              <h5 className="mt-1 ml-2">{item.question}</h5>
                            </div>
                            <div className="ans ml-2">
                              <label
                                className="radio"
                                htmlFor={`${item.id}-answer1`}
                              >
                                <input
                                  type="radio"
                                  id={`${item.id}-answer1`}
                                  name={item.id + '-' + item.question}
                                  />
                                <span>{item.answer1}</span>
                              </label>
                            </div>
                            <div className="ans ml-2">
                              <label
                                className="radio"
                                htmlFor={`${item.id}-answer2`}
                              >
                                <input
                                  type="radio"
                                  id={`${item.id}-answer2`}
                                  name={item.id + '-' + item.question}
                                  />
                                <span>{item.answer2}</span>
                              </label>
                            </div>
                            <div className="ans ml-2">
                              <label
                                className="radio"
                                htmlFor={`${item.id}-answer3`}
                              >
                                <input
                                  type="radio"
                                  id={`${item.id}-answer3`}
                                  name={item.id + '-' + item.question}
                                  />
                                <span>{item.answer3}</span>
                              </label>
                            </div>
                            <div className="ans ml-2">
                              <label
                                className="radio"
                                htmlFor={`${item.id}-answer4`}
                              >
                                <input
                                  type="radio"
                                  id={`${item.id}-answer4`}
                                  name={item.id + '-' + item.question}
                                  />
                                <span>{item.answer4}</span>
                              </label>
                            </div>
                          </div>
                        );
                      })}

                    </div>
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

export default FinalQuiz;
