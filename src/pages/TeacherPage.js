import React from "react";
import { useNavigate } from "react-router-dom";

const TeacherPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Teacher Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
        <button
          onClick={() => navigate("/add-student")}
          style={buttonStyle}
        >
          Add Student
        </button>
        <button
          onClick={() => navigate("/edit-student")}
          style={buttonStyle}
        >
          Edit Student
        </button>
        <button
          onClick={() => navigate("/generate-seating")}
          style={buttonStyle}
        >
          Generate Seating Arrangement
        </button>
        <button
          onClick={() => navigate("/show-students")}
          style={buttonStyle}
        >
          Questionnaire
        </button>
        <button
          onClick={() => navigate("/analytics")}
          style={buttonStyle}
        >
          Analytics
        </button>
        <button
          onClick={() => navigate("/logout")}
          style={{ ...buttonStyle, backgroundColor: "red", color: "white" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "15px 30px",
  backgroundColor: "lightblue",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  color: "#333",
};

export default TeacherPage;
