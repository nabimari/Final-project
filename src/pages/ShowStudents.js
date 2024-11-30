import React, { useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure the path to your firebase.js file is correct
import { useNavigate } from "react-router-dom";

const ShowStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showFetchButton, setShowFetchButton] = useState(true);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Students"));
      const studentList = await Promise.all(
        querySnapshot.docs.map(async (docSnapshot) => {
          const questionnaireDoc = await getDoc(
            doc(db, "Students", docSnapshot.id, "Questionnaire", "Responses")
          );
          return {
            id: docSnapshot.id,
            ...docSnapshot.data(),
            hasSubmitted: questionnaireDoc.exists(), // Check if questionnaire exists
          };
        })
      );

      setStudents(studentList);
      setShowSearch(true);
      setShowFetchButton(false); // Hide the Fetch Students button after clicking it
    } catch (error) {
      console.error("Error fetching students: ", error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "900px",
      margin: "20px auto",
      fontFamily: "'Arial', sans-serif",
    },
    header: {
      textAlign: "center",
      color: "#333",
      fontSize: "30px",
      marginBottom: "20px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    fetchButton: {
      padding: "15px 30px",
      borderRadius: "50px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      marginBottom: "20px",
      fontSize: "18px",
      fontWeight: "bold",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease",
    },
    searchBar: {
      width: "100%",
      padding: "12px",
      marginBottom: "20px",
      borderRadius: "30px",
      border: "2px solid #ccc",
      fontSize: "16px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    note: {
      marginBottom: "10px",
      color: "#007bff",
      fontSize: "16px",
      fontStyle: "italic",
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#e3f2fd",
      padding: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    tableContainer: {
      overflowY: "auto",
      maxHeight: "400px",
      borderRadius: "15px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      padding: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    th: {
      padding: "15px",
      backgroundColor: "#007bff",
      color: "#fff",
      borderBottom: "3px solid #ddd",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "16px",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
      textAlign: "left",
      fontSize: "14px",
    },
    doButton: {
      padding: "10px 20px",
      borderRadius: "20px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      transition: "all 0.3s ease",
    },
    showResultsButton: {
      padding: "10px 20px",
      borderRadius: "20px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      transition: "all 0.3s ease",
    },
    noData: {
      textAlign: "center",
      color: "#666",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Student List</h2>

      {showFetchButton && (
        <button onClick={fetchStudents} style={styles.fetchButton}>
          Fetch Students
        </button>
      )}

      {showSearch && (
        <>
          <p style={styles.note}>Use the search bar below to filter students by name.</p>
          <input
            type="text"
            placeholder="Search students by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBar}
          />
        </>
      )}

      <div style={styles.tableContainer}>
        {filteredStudents.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Academic Level</th>
                <th style={styles.th}>Behavior</th>
                <th style={styles.th}>Language</th>
                <th style={styles.th}>Special Needs</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td style={styles.td}>{student.name}</td>
                  <td style={styles.td}>{student.age}</td>
                  <td style={styles.td}>{student.academicLevel}</td>
                  <td style={styles.td}>{student.behavior}</td>
                  <td style={styles.td}>{student.language}</td>
                  <td style={styles.td}>{student.specialNeeds ? "Yes" : "No"}</td>
                  <td style={styles.td}>
                    {student.hasSubmitted ? (
                      <button
                      onClick={() => navigate(`/Show-results/${student.id}`)}
                      style={{
                        padding: "10px 20px",
                        borderRadius: "20px",
                        backgroundColor: "#dc3545", // Red color
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "14px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Show Results
                    </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/Questionnaire/${student.id}`)}
                        style={styles.doButton}
                      >
                        Do Questionnaire
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.noData}>
            No students found. Click "Fetch Students" to load data.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShowStudents;
