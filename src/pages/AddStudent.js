/*
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure the path to your firebase.js file is correct
import Header from "../components/Header";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    academicLevel: "",
    behavior: "",
    specialNeeds: false,
    language: "",
  });

  // Handles input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation for required fields
    if (!student.name || !student.age || !student.academicLevel || !student.behavior || !student.language) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Add student data to Firestore
      await addDoc(collection(db, "Students"), student);
      alert("Student added successfully!");
      console.log("Student added: ", student);

      // Reset form after successful submission
      setStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "20px auto", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>

      <h2 style={{ textAlign: "center", color: "#333" }}>Add Student</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Enter the student's full name"
          value={student.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter the student's age"
          value={student.age}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
        />
        <input
          type="text"
          name="academicLevel"
          placeholder="Academic Level (e.g., Grade 5, Beginner, etc.)"
          value={student.academicLevel}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
        />
        <input
          type="text"
          name="behavior"
          placeholder="Behavior traits (e.g., calm, distracted, etc.)"
          value={student.behavior}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
        />
        <input
          type="text"
          name="language"
          placeholder="Language (e.g., English, Spanish, etc.)"
          value={student.language}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
        />
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="checkbox"
            name="specialNeeds"
            checked={student.specialNeeds}
            onChange={(e) =>
              setStudent((prev) => ({ ...prev, specialNeeds: e.target.checked }))
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
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
*/
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure the path to your firebase.js file is correct
import Header from "../components/Header"; // Import the Header component

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    academicLevel: "",
    behavior: "",
    specialNeeds: false,
    language: "",
  });

  // Handles input changes for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation for required fields
    if (!student.name || !student.age || !student.academicLevel || !student.behavior || !student.language) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Add student data to Firestore
      await addDoc(collection(db, "Students"), student);
      alert("Student added successfully!");
      console.log("Student added: ", student);

      // Reset form after successful submission
      setStudent({
        name: "",
        age: "",
        academicLevel: "",
        behavior: "",
        specialNeeds: false,
        language: "",
      });
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      {/* Add Header */}
      <Header title="Add Student" />

      {/* Main Form */}
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
        <h2 style={{ textAlign: "center", color: "#333" }}>Add Student</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            name="name"
            placeholder="Enter the student's full name"
            value={student.name}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
          />
          <input
            type="number"
            name="age"
            placeholder="Enter the student's age"
            value={student.age}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
          />
          <input
            type="text"
            name="academicLevel"
            placeholder="Academic Level (e.g., Grade 5, Beginner, etc.)"
            value={student.academicLevel}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
          />
          <input
            type="text"
            name="behavior"
            placeholder="Behavior traits (e.g., calm, distracted, etc.)"
            value={student.behavior}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
          />
          <input
            type="text"
            name="language"
            placeholder="Language (e.g., English, Spanish, etc.)"
            value={student.language}
            onChange={handleChange}
            required
            style={{ padding: "10px", borderRadius: "5px", border: "1px solid lightgray" }}
          />
          <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
              type="checkbox"
              name="specialNeeds"
              checked={student.specialNeeds}
              onChange={(e) =>
                setStudent((prev) => ({ ...prev, specialNeeds: e.target.checked }))
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
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
