import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const admin = useSelector((state) => state.admin);

  return (
    <>
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav main_aligner">
          <li className="sidebar-brand">
            <a href="#">MCQMED.LK</a>
          </li>
          <li>
            <a href="/quiz">Quiz</a>
          </li>
          <li>
            <a href="/quizquestions">Quiz question</a>
          </li>
          <li>
            <a href="/admin">User Accounts</a>
          </li>
          <li>
            <a href="/payment">Payement Information</a>
          </li>
          <li>
            <a href="/finalallquiz">Displayed Quiz</a>
          </li>
          <li>
            <div className="d-flex align-items-center bottom_align">
              <a href="/editprofile">
              <h5 className="pr-4 text-white text-capitalize mb-0">{admin.name}</h5>

              </a>
              <button
                type="button"
                className="btn btn-danger me-3"
                onClick={() => {
                  localStorage.clear();
                  dispatch({ type: "LOGOUT" });
                  history("/login");
                }}
              >
                Logout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
