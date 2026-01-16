import React, { useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [inputID, setInputId] = useState('');
  const [inputPW, setInputPW] = useState('');

  const navigate = useNavigate(); // 페이지 이동
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/login`, {
        method: 'POST', 
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          id: inputID,
          password: inputPW
        }),
      });
      const result = await response.json();

      if (result.success) {
        alert("SUCCESS!");
        localStorage.setItem("loginUser", result.message);
        navigate('/home');
      }
      else {
        alert("ERROR!");
      }
    }
    catch (error) {
      console.error ("Login ERROR:", error);
      alert("NOT CONNECT!");
    }
  };
  
  return (
    <div className= "wrapper">
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='ID' required value={inputID} onChange={(e) => setInputId(e.target.value)} />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder='PASSWORD' required value={inputPW} onChange={(e) => setInputPW(e.target.value)} />
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