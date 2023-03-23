import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      return toast.error("Please fill all required fields");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return toast.error("Invalid email address");
    }

    fetch(process.env.REACT_APP_API_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("admin", JSON.stringify(data.admin));
          dispatch({ type: "LOGIN", payload: data.admin })
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
      <div className="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="required"
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => handleSubmit()}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
