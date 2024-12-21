/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ViewStudentsPage = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState(null);
  const [newStudent, setNewStudent] = useState("");

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const classRef = doc(db, "Classes", classId);
        const classSnapshot = await getDoc(classRef);
        if (classSnapshot.exists()) {
          setClassData({ id: classSnapshot.id, ...classSnapshot.data() });
        }
      } catch (err) {
        console.error("Error fetching class data:", err.message);
      }
    };

    fetchClassData();
  }, [classId]);

  const handleAddStudent = async () => {
    if (newStudent.trim()) {
      const newStudentObject = {
        id: `${Date.now()}`, // Generate a unique ID for the student
        name: newStudent,
        age: null,
        academicLevel: null,
        behavior: null,
        specialNeeds: false,
        language: null,
        classId,
      };

      try {
        const classRef = doc(db, "Classes", classId);
        await updateDoc(classRef, {
          students: arrayUnion(newStudentObject),
        });

        setClassData((prev) => ({
          ...prev,
          students: [...prev.students, newStudentObject],
        }));
        setNewStudent("");
        alert("Student added successfully!");
      } catch (err) {
        console.error("Error adding student:", err.message);
      }
    } else {
      alert("Please enter a valid student name.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {classData ? (
        <>
          <h2>
            {classData.name} - {classData.students.length} Students
          </h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {classData.students.map((student, index) => (
              <li
                key={student.id || index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <strong>Name:</strong> {student.name || "N/A"} <br />
                <strong>Age:</strong> {student.age || "N/A"} <br />
                <strong>Academic Level:</strong> {student.academicLevel || "N/A"} <br />
                <strong>Behavior:</strong> {student.behavior || "N/A"} <br />
                <strong>Language:</strong> {student.language || "N/A"} <br />
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px" }}>
            <input
              type="text"
              placeholder="Student Name"
              value={newStudent}
              onChange={(e) => setNewStudent(e.target.value)}
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px",
                marginRight: "10px",
              }}
            />
            <button
              onClick={handleAddStudent}
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add Student
            </button>
          </div>
        </>
      ) : (
        <p>Loading class data...</p>
      )}
    </div>
  );
};

export default ViewStudentsPage;
*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ViewStudentsPage = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    academicLevel: "",
    behavior: "",
    specialNeeds: false,
    language: "",
  });

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const classRef = doc(db, "Classes", classId);
        const classSnapshot = await getDoc(classRef);
        if (classSnapshot.exists()) {
          setClassData({ id: classSnapshot.id, ...classSnapshot.data() });
        }
      } catch (err) {
        console.error("Error fetching class data:", err.message);
      }
    };

    fetchClassData();
  }, [classId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (!newStudent.name || !newStudent.age || !newStudent.academicLevel || !newStudent.behavior || !newStudent.language) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudentObject = {
      ...newStudent,
      id: `${Date.now()}`, // Generate a unique ID for the student
      classId,
    };

    try {
      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, {
        students: arrayUnion(newStudentObject),
      });

      setClassData((prev) => ({
        ...prev,
        students: [...prev.students, newStudentObject],
      }));
      setNewStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
      alert("Student added successfully!");
    } catch (err) {
      console.error("Error adding student:", err.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {classData ? (
        <>
          <h2>
            {classData.name} - {classData.students.length} Students
          </h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {classData.students.map((student, index) => (
              <li
                key={student.id || index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <strong>Name:</strong> {student.name || "N/A"} <br />
                <strong>Age:</strong> {student.age || "N/A"} <br />
                <strong>Academic Level:</strong> {student.academicLevel || "N/A"} <br />
                <strong>Behavior:</strong> {student.behavior || "N/A"} <br />
                <strong>Language:</strong> {student.language || "N/A"} <br />
                <strong>Special Needs:</strong> {student.specialNeeds ? "Yes" : "No"}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h3>Add New Student</h3>
            <form onSubmit={handleAddStudent} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newStudent.name}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={newStudent.age}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="text"
                name="academicLevel"
                placeholder="Academic Level"
                value={newStudent.academicLevel}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="text"
                name="behavior"
                placeholder="Behavior"
                value={newStudent.behavior}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={newStudent.language}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <label>
                <input
                  type="checkbox"
                  name="specialNeeds"
                  checked={newStudent.specialNeeds}
                  onChange={handleChange}
                />
                Special Needs
              </label>
              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add Student
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>Loading class data...</p>
      )}
    </div>
  );
};

export default ViewStudentsPage;
*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ViewStudentsPage = () => {
  const { classId } = useParams();
  const [classData, setClassData] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    academicLevel: "",
    behavior: "",
    specialNeeds: false,
    language: "",
  });
  const [editingStudent, setEditingStudent] = useState(null); // Track the student being edited

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const classRef = doc(db, "Classes", classId);
        const classSnapshot = await getDoc(classRef);
        if (classSnapshot.exists()) {
          setClassData({ id: classSnapshot.id, ...classSnapshot.data() });
        }
      } catch (err) {
        console.error("Error fetching class data:", err.message);
      }
    };

    fetchClassData();
  }, [classId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (
      !newStudent.name ||
      !newStudent.age ||
      !newStudent.academicLevel ||
      !newStudent.behavior ||
      !newStudent.language
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (newStudent.age > 18) {
      alert("Age must be 18 or below. This system is for school students only.");
      return;
    }

    const newStudentObject = {
      ...newStudent,
      id: `${Date.now()}`, // Generate a unique ID for the student
      classId,
    };

    try {
      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, {
        students: arrayUnion(newStudentObject),
      });

      setClassData((prev) => ({
        ...prev,
        students: [...prev.students, newStudentObject],
      }));
      setNewStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
      alert("Student added successfully!");
    } catch (err) {
      console.error("Error adding student:", err.message);
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    if (newStudent.age > 18) {
      alert("Age must be 18 or below. This system is for school students only.");
      return;
    }

    try {
      const updatedStudents = classData.students.map((student) =>
        student.id === editingStudent.id ? { ...newStudent } : student
      );

      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, { students: updatedStudents });

      setClassData((prev) => ({ ...prev, students: updatedStudents }));
      setEditingStudent(null);
      setNewStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
      alert("Student updated successfully!");
    } catch (err) {
      console.error("Error updating student:", err.message);
    }
  };


  const handleDeleteStudent = async (student) => {
    try {
      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, {
        students: arrayRemove(student),
      });

      setClassData((prev) => ({
        ...prev,
        students: prev.students.filter((s) => s.id !== student.id),
      }));
      alert("Student deleted successfully!");
    } catch (err) {
      console.error("Error deleting student:", err.message);
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setNewStudent(student);
  };



  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      {classData ? (
        <>
          <h2>
            {classData.name} - {classData.students.length} Students
          </h2>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {classData.students.map((student, index) => (
              <li
                key={student.id || index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <strong>Name:</strong> {student.name || "N/A"} <br />
                <strong>Age:</strong> {student.age || "N/A"} <br />
                <strong>Academic Level:</strong> {student.academicLevel || "N/A"} <br />
                <strong>Behavior:</strong> {student.behavior || "N/A"} <br />
                <strong>Language:</strong> {student.language || "N/A"} <br />
                <strong>Special Needs:</strong> {student.specialNeeds ? "Yes" : "No"} <br />
                <button
                  onClick={() => handleEditStudent(student)}
                  style={{
                    marginTop: "10px",
                    marginRight: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteStudent(student)}
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
            <h3>{editingStudent ? "Edit Student" : "Add New Student"}</h3>
            <form
              onSubmit={editingStudent ? handleSaveEdit : handleAddStudent}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newStudent.name}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={newStudent.age}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="text"
                name="academicLevel"
                placeholder="Academic Level"
                value={newStudent.academicLevel}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="text"
                name="behavior"
                placeholder="Behavior"
                value={newStudent.behavior}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={newStudent.language}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "14px",
                }}
              />
              <label>
                <input
                  type="checkbox"
                  name="specialNeeds"
                  checked={newStudent.specialNeeds}
                  onChange={handleChange}
                />
                Special Needs
              </label>
              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: editingStudent ? "#4CAF50" : "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {editingStudent ? "Save Changes" : "Add Student"}
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>Loading class data...</p>
      )}
    </div>
  );
};

export default ViewStudentsPage;
*/

import React, { useEffect, useState ,useContext} from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, collection, addDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App"; // Import ThemeContext


const ViewStudentsPage = ({ teacherName }) => {
  const { classId } = useParams();
  const [classData, setClassData] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: "",
    age: "",
    academicLevel: "",
    behavior: "",
    specialNeeds: false,
    language: "",
  });
  const { theme } = useContext(ThemeContext); // Access theme
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch class data
  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const classRef = doc(db, "Classes", classId);
        const classSnapshot = await getDoc(classRef);
        if (classSnapshot.exists()) {
          setClassData({ id: classSnapshot.id, ...classSnapshot.data() });
        }
      } catch (err) {
        console.error("Error fetching class data:", err.message);
      }
    };

    fetchClassData();
  }, [classId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (
      !newStudent.name ||
      !newStudent.age ||
      !newStudent.academicLevel ||
      !newStudent.behavior ||
      !newStudent.language
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (newStudent.age > 18) {
      alert("Age must be 18 or below. This system is for school students only.");
      return;
    }

    const newStudentObject = {
      ...newStudent,
      id: `${Date.now()}`,
      classId,
    };

    try {
      const studentRef = await addDoc(collection(db, "Students"), newStudentObject);

      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, {
        students: arrayUnion({ id: studentRef.id, ...newStudentObject }),
      });

      setClassData((prev) => ({
        ...prev,
        students: [...prev.students, { id: studentRef.id, ...newStudentObject }],
      }));

      setNewStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
      alert("Student added successfully!");
    } catch (err) {
      console.error("Error adding student:", err.message);
    }
  };

  const handleDeleteStudent = async (student) => {
    try {
      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, {
        students: arrayRemove(student),
      });

      setClassData((prev) => ({
        ...prev,
        students: prev.students.filter((s) => s.id !== student.id),
      }));
      alert("Student deleted successfully!");
    } catch (err) {
      console.error("Error deleting student:", err.message);
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setNewStudent(student);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    if (newStudent.age > 18) {
      alert("Age must be 18 or below. This system is for school students only.");
      return;
    }

    try {
      const updatedStudents = classData.students.map((student) =>
        student.id === editingStudent.id ? { ...newStudent } : student
      );

      const classRef = doc(db, "Classes", classId);
      await updateDoc(classRef, { students: updatedStudents });

      setClassData((prev) => ({ ...prev, students: updatedStudents }));
      setEditingStudent(null);
      setNewStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
      alert("Student updated successfully!");
    } catch (err) {
      console.error("Error updating student:", err.message);
    }
  };


  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      padding: "20px",
      backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: theme === "light" ? "#333" : "#f9f9f9",
    },
    sidebarSpacing: {
      width: "300px", // Matches sidebar width
      flexShrink: 0,
    },
    mainContent: {
      flex: 1,
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: theme === "light" ? "#ffffff" : "#1E1E1E",
      borderRadius: "12px",
      boxShadow: theme === "light"
        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
    header: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      color: theme === "light" ? "#1E88E5" : "#90CAF9",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      backgroundColor: theme === "light" ? "#f9f9f9" : "#2E3B4E",
      border: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      boxShadow: theme === "light"
        ? "0 2px 4px rgba(0, 0, 0, 0.1)"
        : "0 2px 4px rgba(0, 0, 0, 0.3)",
    },
    tableWrapper: {
      maxHeight: "400px", // Set the desired max height
      overflowY: "auto", // Enable vertical scrolling
      marginTop: "20px",
      backgroundColor: theme === "light" ? "#f9f9f9" : "#2E3B4E",
      borderRadius: "8px",
      border: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      boxShadow: theme === "light"
        ? "0 2px 4px rgba(0, 0, 0, 0.1)"
        : "0 2px 4px rgba(0, 0, 0, 0.3)",
      padding: "10px", // Optional padding for aesthetics
    },
    th: {
      padding: "12px",
      backgroundColor: theme === "light" ? "#4CAF50" : "#3C4049",
      color: "#fff",
      textAlign: "left",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    td: {
      padding: "10px",
      color: theme === "light" ? "#333" : "#ddd",
      borderBottom: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      transition: "background-color 0.3s ease-in-out",
    },
    tableRowHover: {
      backgroundColor: theme === "light" ? "#F8F9FA" : "#2D3748",
    },
    editButton: {
      marginRight: "10px",
      padding: "8px 16px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      boxShadow: theme === "light"
        ? "0 2px 4px rgba(0, 0, 0, 0.2)"
        : "0 2px 4px rgba(0, 0, 0, 0.5)",
      transition: "background-color 0.3s ease",
    },
    deleteButton: {
      padding: "8px 10px",
      backgroundColor: "#f44336",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      boxShadow: theme === "light"
        ? "0 2px 4px rgba(0, 0, 0, 0.2)"
        : "0 2px 4px rgba(0, 0, 0, 0.5)",
      transition: "background-color 0.3s ease",
    },
    formContainer: {
      marginTop: "100px",
      padding: "25px",
      width:"60%",
      marginLeft:"140px",
      borderRadius: "12px",
      backgroundColor: theme === "light" ? "#ffffff" : "#2E3B4E",
      boxShadow: theme === "light"
        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 8px rgba(0, 0, 0, 0.5)",
    },
    formHeader: {
      marginBottom: "15px",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      color: theme === "light" ? "#1E88E5" : "#90CAF9",
    },
    input: {
      padding: "10px",
      borderRadius: "8px",
      border: theme === "light" ? "1px solid #ccc" : "1px solid #555",
      fontSize: "14px",
      backgroundColor: theme === "light" ? "#F5F5F5" : "#1E1E1E",
      color: theme === "light" ? "#333" : "#f9f9f9",
      marginBottom: "10px",
      outline: "none",
    },
    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "14px",
      color: theme === "light" ? "#333" : "#f9f9f9",
    },
    checkbox: {
      transform: "scale(1.2)",
      cursor: "pointer",
    },
    submitButton: {
      padding: "12px 20px",
      backgroundColor: "#2196F3",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      boxShadow: theme === "light"
        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 8px rgba(0, 0, 0, 0.5)",
      transition: "background-color 0.3s ease",
    },
    submitButtonHover: {
      backgroundColor: "#1769aa",
    },
  };
  
  

  
  return (
    <div style={styles.container}>
      <div style={styles.sidebarSpacing}></div>
      <div style={styles.mainContent}>
      {classData ? (
        <>
          <h2 style={styles.header}>
            {classData.name} - {classData.students?.length || 0} Students
          </h2>
          {classData.students && classData.students.length > 0 ? (
            <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeader}>
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
                {classData.students.map((student) => (
                  <tr key={student.id}>
                    <td style={styles.td}>{student.name}</td>
                    <td style={styles.td}>{student.age}</td>
                    <td style={styles.td}>{student.academicLevel}</td>
                    <td style={styles.td}>{student.behavior}</td>
                    <td style={styles.td}>{student.language}</td>
                    <td style={styles.td}>
                      {student.specialNeeds ? "Yes" : "No"}
                    </td>
                    <td style={styles.td}>
                      <button
                        onClick={() => handleEditStudent(student)}
                        style={styles.editButton}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student)}
                        style={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          ) : (
            <p>No students found in this class.</p>
          )}
          <div style={styles.formContainer}>
            <h3 style={styles.formHeader}>
              {editingStudent ? "Edit Student" : "Add New Student"}
            </h3>
            <form
              onSubmit={editingStudent ? handleSaveEdit : handleAddStudent}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newStudent.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={newStudent.age}
                onChange={handleChange}
                required
                min="5"
                max="18"
                style={styles.input}
              />
              <input
                type="text"
                name="academicLevel"
                placeholder="Academic Level"
                value={newStudent.academicLevel}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="text"
                name="behavior"
                placeholder="Behavior"
                value={newStudent.behavior}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="text"
                name="language"
                placeholder="Language"
                value={newStudent.language}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="specialNeeds"
                  checked={newStudent.specialNeeds}
                  onChange={handleChange}
                  style={styles.checkbox}
                />
                Special Needs
              </label>
              <button
                type="submit"
                style={{
                  ...styles.submitButton,
                  backgroundColor: editingStudent ? "#4CAF50" : "#2196F3",
                }}
              >
                {editingStudent ? "Save Changes" : "Add Student"}
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>Loading class data...</p>
      )}
    </div>
    </div>
  );
  
};

export default ViewStudentsPage;
