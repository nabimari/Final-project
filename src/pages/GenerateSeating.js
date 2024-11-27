import React, { useState } from "react";
import Header from "../components/Header";

const GenerateSeating = () => {
  const [criteria, setCriteria] = useState({
    academicLevel: false,
    behavior: false,
    specialNeeds: false,
    language: false,
  });

  const handleCriteriaChange = (e) => {
    const { name, checked } = e.target;
    setCriteria((prev) => ({ ...prev, [name]: checked }));
  };

  const handleGenerate = () => {
    alert("Seating arrangement will be generated based on selected criteria.");
    // Implement algorithm call here
  };

  return (
    <div>


       {/* Main Form */}
      <Header title="Generate Seating Arrangement" />
      <div style={containerStyle}>
        <h2 style={headerStyle}>Select Criteria</h2>
        <div style={criteriaStyle}>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="academicLevel"
              checked={criteria.academicLevel}
              onChange={handleCriteriaChange}
            />
            Academic Level
          </label>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="behavior"
              checked={criteria.behavior}
              onChange={handleCriteriaChange}
            />
            Behavior
          </label>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="specialNeeds"
              checked={criteria.specialNeeds}
              onChange={handleCriteriaChange}
            />
            Special Needs
          </label>
          <label style={checkboxLabelStyle}>
            <input
              type="checkbox"
              name="language"
              checked={criteria.language}
              onChange={handleCriteriaChange}
            />
            Language
          </label>
        </div>
        <button onClick={handleGenerate} style={buttonStyle}>
          Generate Seating
        </button>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "20px auto",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const headerStyle = {
  color: "#007bff",
  marginBottom: "20px",
  fontSize: "24px",
  fontWeight: "bold",
};

const criteriaStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gap: "10px",
  marginBottom: "20px",
};

const checkboxLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

export default GenerateSeating;
