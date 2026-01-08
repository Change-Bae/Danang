import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login'; // Login 컴포넌트 불러오기
import Home from './Components/Home/Home';

const PrivateRoute = ({ Children }) => {
  const isLogin = localStorage.getItem("loginUser");

  return isLogin ? Children : <Navigate to="/" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Login />} />
        <Route path="Home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;