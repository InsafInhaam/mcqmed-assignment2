import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const CreateAdmin = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = () => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!name || !email || !password|| !userType) {
      return toast.error("Please fill all required fields");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return toast.error("Invalid email address");
    } else if (password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    } else if (!specialChars.test(password)) {
      return toast.error("Password must have special characters");
    }

    fetch(process.env.REACT_APP_API_URL + "/api/createAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        name,
        email,
        password,
        userType
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          history("/admin");
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
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Add Employee</h4>
                  </div>
                  <div className="modal-body">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="correctAnswer">Usertype:</label>
                      <select
                        id="correctAnswer"
                        value={userType}
                        onChange={(event) => setUserType(event.target.value)}
                        required
                        className="form-control"
                      >
                        <option value="" disabled>
                          Select an answer
                        </option>
                        <option value="0">Administrator</option>
                        <option value="1">HR</option>
                        <option value="2">Developer</option>
                        <option value="3">Editor</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input
                      type="button"
                      className="btn btn-success"
                      defaultValue="Add"
                      onClick={() => handleSubmit()}
                    />
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

export default CreateAdmin;
