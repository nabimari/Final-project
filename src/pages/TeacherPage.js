/*import React from "react";
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
          onClick={() => navigate("/questionnaire")}
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
*/
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const TeacherPage = () => {
  const navigate = useNavigate();

  return (
  <div>
  <Header title="log out header" />

     {/* Main Form */}
    <div style={containerStyle}>
      <h1 style={headerStyle}>Teacher Dashboard</h1>
      <div style={buttonContainerStyle}>
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
          Seating Arrangement
        </button>
        <button
          onClick={() => navigate("/questionnaire")}
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
      </div>
    </div>
    </div>
  );
};

const containerStyle = {
  textAlign: "center",
  padding: "40px",
  backgroundColor: "#f0f8ff",
  minHeight: "100vh",
};

const headerStyle = {
  marginBottom: "30px",
  color: "#007bff",
  fontSize: "36px",
  fontWeight: "bold",
};

const buttonContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "30px",
};

const buttonStyle = {
  padding: "20px 40px",
  backgroundColor: "#007bff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "18px",
  color: "#fff",
  fontWeight: "bold",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.2s, box-shadow 0.2s",
};

export default TeacherPage;
