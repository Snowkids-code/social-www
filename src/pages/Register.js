import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Register() {
  const { login } = useContext(AuthContext);

  const handleReg = () => {
    login();
  };
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="left">
          <h1>Phoenix Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button onClick={handleReg}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
