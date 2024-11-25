import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Back button, only shown if not on the Dashboard */}
      {location.pathname !== "/" && (
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#fff",
            border: "1px solid lightgray",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back
        </button>
      )}

      {/* Page Title */}
      <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1 }}>{title}</h2>

      {/* Empty spacer for layout balance */}
      <div style={{ width: "64px" }}></div>
    </div>
  );
};

export default Header;
