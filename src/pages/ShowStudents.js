import React, { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Ensure the path to your firebase.js file is correct
import { useNavigate } from "react-router-dom";

const ShowStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      console.log("Fetching students...");
      const querySnapshot = await getDocs(collection(db, "Students"));
      const studentList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched Students:", studentList); // Log fetched data
      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students: ", error); // Log the error
    }
  };

  const handleDoQuestionnaire = (studentId) => {
    console.log(`Redirecting to questionnaire for student ID: ${studentId}`);
    // Add your logic here for handling the questionnaire for the specific student
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "20px auto" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Student List</h2>
      <button
        onClick={fetchStudents}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Fetch Students
      </button>
      <div>
        {students.length > 0 ? (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f9f9f9" }}>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Age
                </th>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Academic Level
                </th>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Behavior
                </th>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Language
                </th>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Special Needs
                </th>
                <th style={{ border: "1px solid lightgray", padding: "10px" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    {student.name}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    {student.age}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    {student.academicLevel}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    {student.behavior}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    {student.language}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    {student.specialNeeds ? "Yes" : "No"}
                  </td>
                  <td style={{ border: "1px solid lightgray", padding: "10px" }}>
                    <button
                      onClick={() => navigate("/Questionnaire")}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "5px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Do Questionnaire
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: "center", color: "#666" }}>
            No students found. Click "Fetch Students" to load data.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowStudents;
