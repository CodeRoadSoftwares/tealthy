import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../context/authcontext";

function Login() {
//   const { auth, setAuth } = useContext(AuthContext);
  const [auth,setAuth]=useState('')
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const updateInput = (e) => {
    const { name, value } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };
  const enterHome = async (e) => {
    e.preventDefault();
    const { email, password } = input;
    console.log(input);
    if (email == "") {
      alert("Enter email");
    } else if (password == "") {
      alert("Enter passsword");
    } else {
      const data = await axios
        .post("http://localhost:6002/login", input)
        .then((res) => {
            const data = JSON.stringify(res);
            window.localStorage.setItem("token", data);
          })
        .catch((err) => {
          alert("Something Wrong");
        });
    }
  };
  return (
    <>
      <div className="login-body">
        <div className="login-page">
          <div className="left-login">
            <div className="left-login-content">
              <h1>Sign In</h1>
              <form action="">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email address"
                  onChange={updateInput}
                />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={updateInput}
                />
                <br />
                <button className="signin-btn" onClick={enterHome}>
                  SIGN IN
                </button>
              </form>
              <p>
                Best supported on latest version of Chrome, Firefox and Safari
              </p>
            </div>
          </div>

          <div className="right-login">
            <div className="right-login-content">
              <h1>Hello</h1>
              <h3>Enter your personal details and start</h3>
              <h3>the journey with us.</h3>
              <Link to="/register">
                <button className="signup-btn">SIGN UP</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
