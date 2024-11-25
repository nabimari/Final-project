import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure correct path to firebase.js
import Header from "../components/Header";

const EditStudent = ({ studentId }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch student details when the component loads
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const docRef = doc(db, "Students", studentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setStudent(docSnap.data());
        } else {
          alert("No student found!");
        }
      } catch (error) {
        console.error("Error fetching student details: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [studentId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "Students", studentId);
      await updateDoc(docRef, student);
      alert("Student details updated successfully!");
    } catch (error) {
      console.error("Error updating student details: ", error);
      alert("Failed to update student details. Please try again.");
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  if (!student) {
    return <p style={{ textAlign: "center" }}>No student data available.</p>;
  }

  return (
    <div>
      {/* Add Header */}
      <Header title="Edit Student" />

      {/* Main Content */}
      <div
        style={{
          padding: "20px",
          maxWidth: "500px",
          margin: "20px auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Edit Student</h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name || ""}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
          <input
            type="number"
            name="age"
            placeholder="Student Age"
            value={student.age || ""}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
          <input
            type="text"
            name="academicLevel"
            placeholder="Academic Level"
            value={student.academicLevel || ""}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
          <input
            type="text"
            name="behavior"
            placeholder="Behavior"
            value={student.behavior || ""}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={student.language || ""}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid lightgray",
            }}
          />
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              name="specialNeeds"
              checked={student.specialNeeds || false}
              onChange={(e) =>
                setStudent((prev) => ({
                  ...prev,
                  specialNeeds: e.target.checked,
                }))
              }
            />
            Special Needs
          </label>
          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
