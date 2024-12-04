/*
mport React from "react";
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


      <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1 }}>{title}</h2>


      <div style={{ width: "64px" }}></div>
    </div>
  );
};

export default Header;
*/
/*
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Logout handler
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
        alert("Failed to log out. Please try again.");
      });
  };

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

      <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1 }}>{title}</h2>

      <button
        onClick={handleLogout}
        style={{
          padding: "8px 12px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
*/
/*
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Logout handler
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
        alert("Failed to log out. Please try again.");
      });
  };

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

      <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1 }}>{title}</h2>

      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 12px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
*/
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define route-to-title mapping
  const routeTitles = {
    "/": "Dashboard",
    "/login": "Login",
    "/register": "Register",
    "/teacher": "Teacher Dashboard",
    "/add-student": "Add Student",
    "/show-students": "Show Students",
    "/show-students-to-edit": "Edit Students",
    "/edit-student/:id": "Edit Student",
    "/generate-seating": "Generate Seating Arrangement",
    "/questionnaire": "Questionnaire",
    "/show-results/:studentId": "Show Questionnaire Results",
  };

  // Get the current page title based on the route
  const getTitle = () => {
    // Check for dynamic routes like "/edit-student/:id"
    const matchedRoute = Object.keys(routeTitles).find((route) =>
      new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`).test(location.pathname)
    );
    return routeTitles[matchedRoute] || "Virtual Classroom";
  };

  // Logout handler
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
        alert("Failed to log out. Please try again.");
      });
  };

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
      {/* Back Button - Shown if not on the Dashboard */}
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
      <h2 style={{ margin: 0, textAlign: "center", flexGrow: 1 }}>{getTitle()}</h2>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        style={{
          padding: "8px 12px",
          backgroundColor: "#ff4d4d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
