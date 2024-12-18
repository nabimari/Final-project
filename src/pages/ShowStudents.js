/*
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
*/
import React, { useState, useContext, useEffect } from "react";
import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../firebase"; // Ensure the correct path for your firebase.js
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App"; // Ensure the correct path for your App.js
import { getAuth } from "firebase/auth";

const ShowStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]); // For storing available classes
  const [selectedClass, setSelectedClass] = useState(""); // Currently selected class
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showFetchButton, setShowFetchButton] = useState(true);
  const [loading, setLoading] = useState(false); // For showing loading animation

  const { theme } = useContext(ThemeContext); // Access theme from ThemeContext

  // Dynamically update styles based on the theme
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#f9f9f9" : "#121212";
    document.body.style.color = theme === "light" ? "#333" : "#f9f9f9";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);

  // Fetch list of classes
  useEffect(() => {
    const fetchClasses = async () => {
      const auth = getAuth(); // Initialize Firebase Auth
      const currentUser = auth.currentUser; // Get the currently logged-in user
      const teacherId = currentUser?.uid; // Get the teacher's ID
    
      if (!teacherId) {
        console.error("No teacher ID found. Please log in.");
        return;
      }
    
      try {
        const classesRef = collection(db, "Classes");
        
        // Query to filter classes with the same teacherId
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);
    
        // Map the results to an array
        const classesList = querySnapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
    
        setClasses(classesList); // Update state with the filtered classes
      } catch (error) {
        console.error("Error fetching classes: ", error);
      }
    };

    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true); // Start loading animation
      let studentList = [];

      if (selectedClass) {
        // Fetch students from the selected class
        const classRef = doc(db, "Classes", selectedClass);
        const classDoc = await getDoc(classRef);

        if (classDoc.exists()) {
          const studentData = classDoc.data()?.students || []; // Array of student data with field "ID"
          const studentIds = studentData.map((student) => student.id); // Extract only the ID fields
        
          if (studentIds.length > 0) {
            // Query Students collection where the "id" field matches any value in studentIds
            const batchSize = 10; // Firestore 'in' query allows up to 10 values at a time
        
            // Process the student IDs in batches of 10
            for (let i = 0; i < studentIds.length; i += batchSize) {
              const batch = studentIds.slice(i, i + batchSize); // Get a batch of up to 10 IDs
        
              const studentsQuery = query(
                collection(db, "Students"),
                where("id", "in", batch) // Match the "id" field in the Students collection
              );
        
              const studentsSnapshot = await getDocs(studentsQuery);
        
              // Fetch Questionnaire/Responses for each matching student
              const batchResults = await Promise.all(
                studentsSnapshot.docs.map(async (studentDoc) => {
                  const studentRef = studentDoc.ref;
        
                  // Fetch Questionnaire/Responses document
                  const questionnaireRef = doc(studentRef, "Questionnaire", "Responses");
                  const questionnaireDoc = await getDoc(questionnaireRef);
        
                  // Return student data along with additional info
                  return {
                    id: studentDoc.id, // Document ID
                    ...studentDoc.data(), // Student data fields
                    hasSubmitted: questionnaireDoc.exists(), // Check if Responses exists
                  };
                })
              );
        
              // Add results to the final student list
              studentList.push(...batchResults);
            }
        
            console.log("Final Student List:", studentList);
          } else {
            console.log("No student IDs found in the class data.");
          }
        }
      } else {
        // Fetch all students if no class is selected
        const querySnapshot = await getDocs(collection(db, "Students"));
        studentList = await Promise.all(
          querySnapshot.docs.map(async (docSnapshot) => {
            const questionnaireDoc = await getDoc(
              doc(db, "Students", docSnapshot.id, "Questionnaire", "Responses")
            );
            return {
              id: docSnapshot.id,
              ...docSnapshot.data(),
              hasSubmitted: questionnaireDoc.exists(),
            };
          })
        );
      }

      setTimeout(() => {
        setStudents(studentList);
        setShowSearch(true);
        setShowFetchButton(false);
        setLoading(false); // End loading animation
      }, 2000); // Simulate 2-second loading animation
    } catch (error) {
      console.error("Error fetching students: ", error);
      setLoading(false); // Ensure loading stops on error
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: theme === "light" ? "#333" : "#f9f9f9",
    },
    header: {
      backgroundColor: theme === "light" ? "#1E88E5" : "#444",
      color: "#fff",
      padding: "25px",
      borderRadius: "12px",
      textAlign: "center",
      marginBottom: "30px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    },
    headerTitle: {
      fontSize: "40px",
      fontWeight: "bold",
      letterSpacing: "1px",
      margin: 0,
    },
    dropdownContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "25px",
      gap: "20px",
    },
    dropdown: {
      width: "50%",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: theme === "light" ? "#F1F5F9" : "#2E3B4E",
      boxShadow: theme === "light" ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      fontSize: "16px",
      color: theme === "light" ? "#333" : "#E0E0E0",
      outline: "none",
      transition: "all 0.3s ease-in-out",
    },
    searchBar: {
      flex: 1,
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: theme === "light" ? "#F1F5F9" : "#2E3B4E",
      color: theme === "light" ? "#333" : "#E0E0E0",
      boxShadow: theme === "light" ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
      fontSize: "16px",
      outline: "none",
      transition: "all 0.3s ease-in-out",
    },
    fetchButton: {
      padding: "12px 25px",
      borderRadius: "10px",
      backgroundColor: "#28A745",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "600",
      textTransform: "uppercase",
      cursor: "pointer",
      border: "none",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    },
    fetchButtonHover: {
      backgroundColor: "#218838",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
    },
    tableContainer: {
      borderRadius: "12px",
      backgroundColor: theme === "light" ? "#ffffff" : "#2E3B4E",
      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
      overflowY: "auto",
      maxHeight: "500px",
      border: theme === "light" ? "1px solid #E0E0E0" : "1px solid #555",
      scrollbarWidth: "thin",
      scrollbarColor: theme === "light" ? "#aaa #f1f1f1" : "#555 #333",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "'Roboto', sans-serif",
      color: theme === "light" ? "#333" : "#F9F9F9",
    },
    th: {
      backgroundColor: theme === "light" ? "#4CAF50" : "#3C4049",
      color: "#fff",
      padding: "14px 18px",
      textAlign: "left",
      borderBottom: theme === "light" ? "2px solid #E0E0E0" : "2px solid #555",
      textTransform: "uppercase",
      fontSize: "14px",
    },
    td: {
      padding: "12px 18px",
      borderBottom: theme === "light" ? "1px solid #E0E0E0" : "1px solid #555",
      transition: "background-color 0.3s ease-in-out",
      fontSize: "14px",
      color: theme === "light" ? "#333" : "#ddd",
    },
    trHover: {
      backgroundColor: theme === "light" ? "#F8F9FA" : "#2D3748",
    },
    noData: {
      textAlign: "center",
      fontSize: "18px",
      margin: "20px 0",
      color: theme === "light" ? "#999" : "#bbb",
    },
    loadingMessage: {
      textAlign: "center",
      fontSize: "18px",
      margin: "20px 0",
      color: theme === "light" ? "#999" : "#bbb",
    },
  };
  

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerTitle}>Student Management</div>
      </header>

      <div style={styles.dropdownContainer}>
        <select
          value={selectedClass}
          onChange={(e) => {
            setSelectedClass(e.target.value);
            setShowFetchButton(true); // Show Fetch Button again if a new class is selected
            setStudents([]); // Reset students list
          }}
          style={styles.dropdown}
        >
          <option value="">Select class</option>
          {classes.map((cls) => (
            <option key={cls.id} value={cls.id}>
              {cls.name}
            </option>
          ))}
        </select>
        {showSearch && (
          <input
            type="text"
            placeholder="Search students by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBar}
          />
        )}
      </div>

      {showFetchButton && (
        <button onClick={fetchStudents} style={styles.fetchButton}>
          Fetch Students
        </button>
      )}

      {loading && <p style={styles.loadingMessage}>Loading students...</p>}

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
                  <td style={styles.td}>
                    {student.hasSubmitted ? (

                      <button
                        onClick={() => navigate(`/show-results/${student.id}`)}
                        style={{
                          backgroundColor: "#dc3545",
                          color: "#fff",
                          borderRadius: "8px",
                          padding: "8px 15px",
                          cursor: "pointer",
                        }}
                      >
                        Show Results
                      </button>
                      
                    ) : (
                      <button
                        onClick={() => navigate(`/questionnaire/${student.id}`)}
                        style={{
                          backgroundColor: "#28a745",
                          color: "#fff",
                          borderRadius: "8px",
                          padding: "8px 15px",
                          cursor: "pointer",
                        }}
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
          !loading && <p style={styles.noData}>No students found.</p>
        )}
      </div>
    </div>
  );
};

export default ShowStudents;






