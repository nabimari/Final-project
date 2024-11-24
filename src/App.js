import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    backgroundColor: "#42a5f5",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <Router>
      <div>
        <nav style={navStyle}>
          <Link style={linkStyle} to="/">Login</Link>
          <Link style={linkStyle} to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
