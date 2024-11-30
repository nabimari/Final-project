import React, { createContext, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddStudent from "./pages/AddStudent";
import ShowStudents from "./pages/ShowStudents";
import PrivateRoute from "./components/PrivateRoute";
import TeacherPage from "./pages/TeacherPage";
import EditStudent from "./pages/EditStudent";
import Questionnaire from "./pages/Questionnaire"; // Import the Questionnaire component
import ShowQuesResults from "./pages/ShowQuesResults";

// Create a Theme Context
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");

  // Check saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ backgroundColor: theme === "light" ? "#f9f9f9" : "#121212", color: theme === "light" ? "#333" : "#f9f9f9", minHeight: "100vh" }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/teacher"
              element={
                <PrivateRoute>
                  <TeacherPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-student"
              element={
                <PrivateRoute>
                  <AddStudent />
                </PrivateRoute>
              }
            />
            <Route
              path="/show-students"
              element={
                <PrivateRoute>
                  <ShowStudents />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-student/:id"
              element={
                <PrivateRoute>
                  <EditStudent />
                </PrivateRoute>
              }
            />
            <Route
              path="/Questionnaire/:studentId"
              element={
                <PrivateRoute>
                  <Questionnaire />
                </PrivateRoute>
              }
            />
            <Route
              path="/Show-results/:studentId"
              element={
               <PrivateRoute>
                 <ShowQuesResults />
              </PrivateRoute>
  }
/>
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

// Header Component with Toggle Button
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: theme === "light" ? "#42a5f5" : "#1e88e5",
    color: "#fff",
  };

  const toggleContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const toggleButtonStyle = {
    position: "relative",
    width: "50px",
    height: "25px",
    backgroundColor: theme === "light" ? "#ccc" : "#444",
    borderRadius: "25px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: theme === "light" ? "flex-start" : "flex-end",
    padding: "5px",
    transition: "all 0.3s ease",
  };

  const toggleCircleStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    transition: "all 0.3s ease",
  };

  return (
    <header style={headerStyle}>
      <span>Virtual Classroom</span>
      <div style={toggleContainerStyle}>
        <span>Dark Mode</span>
        <div style={toggleButtonStyle} onClick={toggleTheme}>
          <div style={toggleCircleStyle}></div>
        </div>
      </div>
    </header>
  );
};

export default App;
