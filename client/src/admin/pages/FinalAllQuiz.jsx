import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";

const FinalAllQuiz = () => {
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
              {quizzes.map((quiz) => {
                return (
                  <div className="col-md-4">
                    <figure className="card card-product">
                      <figcaption className="info-wrap">
                        <h4 className="title">{quiz.quiz_title}</h4>
                        <p className="desc">{quiz.description}</p>
                        <div className="rating-wrap">
                          <div className="label-rating">{quiz.author}</div>
                        </div>
                      </figcaption>
                      <div className="bottom-wrap">
                        <a href={`/finalquiz/${quiz.id}`} className="btn btn-sm btn-primary float-right">
                          View Quiz
                        </a>
                      </div>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* /#page-content-wrapper */}
      </div>
    </>
  );
};

export default FinalAllQuiz;
