/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import GenerateSeating from "./pages/GenerateSeating";
import Questionnaire from "./pages/Questionnaire";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
//import LoginPage from "./pages/LoginPage"; // If login is still used
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
       <nav style={navStyle}>

        </nav>
      <div>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/generate-seating" element={<GenerateSeating />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
*/
/*
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/LoginPage"; // Import Login page
import Register from "./pages/RegisterPage"; // Import Register page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
*/
import React from "react";
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

const App = () => {
  return (
    <Router>
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
          path="/questionnaire"
          element={
            <PrivateRoute>
              <Questionnaire />
            </PrivateRoute>
          }
        />
        <Route
          path="/show-students"
          element={
            <PrivateRoute>
              <ShowStudents/>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
