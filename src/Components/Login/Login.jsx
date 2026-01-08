import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  return (
    <div className= "wrapper">
      <div className="form-box login">
        <form action={""}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="id" placeholder='ID' required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder='PASSWORD' required />
            <FaLock className="icon" />
          </div>

          <div className="forgot">
            <label><input type="checkbox" />Forgot Password</label>
          </div>
          
          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  )
};

export default Login;