/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login (replace with actual login logic)
  };

  const handleRegister = () => {
    navigate("/register"); // Navigate to the Register page
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Dashboard</h1>
      {!isLoggedIn ? (
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            onClick={handleLogin}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", width: "80%" }}>
          <button
            onClick={() => navigate("/add-student")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Student
          </button>
          <button
            onClick={() => navigate("/edit-student")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Edit Student
          </button>
          <button
            onClick={() => navigate("/generate-seating")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Generate Seating Arrangement
          </button>
          <button
            onClick={() => navigate("/questionnaire")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Questionnaire
          </button>
          <button
            onClick={() => navigate("/analytics")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Analytics
          </button>
          <button
            onClick={() => navigate("/settings")}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Settings
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
*/
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Welcome to the Dashboard</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => navigate("/login")} // Navigate to Login page
        >
          Login
        </button>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => navigate("/register")} // Navigate to Register page
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

