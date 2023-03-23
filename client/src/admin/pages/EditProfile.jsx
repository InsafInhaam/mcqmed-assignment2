import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const admin = useSelector((state) => state.admin);
  const userId = admin.id;
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/getAdminById/" + userId, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setName(result[0].name);
        setEmail(result[0].email);
        setUserType(result[0].userType);
      });
  }, []);

  const handleSubmit = () => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!name) {
      return toast.error("Please fill all required fields");
    } else if (password) {
      if (password.length < 8) {
        return toast.error("Password must be at least 8 characters");
      } else if (!specialChars.test(password)) {
        return toast.error("Password must have special characters");
      }
    }

    let body = {
      name,
    };

    if (password) {
      body.password = password;
    }

    body = JSON.stringify(body);

    fetch(process.env.REACT_APP_API_URL + "/api/editProfile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body,
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
                    <h4 className="modal-title">Edit Profile</h4>
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
                        disabled
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
                        className="form-control"
                        disabled
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
                      defaultValue="Edit Profile"
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

export default EditProfile;
