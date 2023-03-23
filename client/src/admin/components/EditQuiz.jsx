import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const EditQuiz = () => {
  const location = useLocation();
  const history = useNavigate();
  const quizId = location.pathname.split("/")[2];
  const [quiztitle, setQuiztitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/GetQuizCatById/" + quizId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setQuiztitle(result[0].quiz_title);
        setDescription(result[0].description);
        setAuthor(result[0].author);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!quiztitle || !description || !author) {
      return toast.error("Please fill all required fields");
    }

    fetch(process.env.REACT_APP_API_URL + "/api/updateQuizCat/"+quizId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        quiz_title: quiztitle,
        description,
        author,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          history("/quiz");
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
                      {" "}
                      <label htmlFor="quiztitle">Quiz Title:</label>
                      <input
                        id="quiztitle"
                        type="text"
                        value={quiztitle}
                        onChange={(event) => setQuiztitle(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description:</label>
                      <input
                        id="description"
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="author">Author:</label>
                      <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        required
                        className="form-control"
                      />
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

export default EditQuiz;
