/*
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login successful!");
      navigate("/teacher"); // Redirect to the dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid lightgray" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid lightgray" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: "lightblue",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
*/
/*
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firebase DB instance

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Fetch the teacher's data from Firestore
      const teacherDoc = await getDoc(doc(db, "Teachers", userCredential.user.uid));
      if (teacherDoc.exists()) {
        console.log("Teacher Data:", teacherDoc.data());
        alert("Login successful!");
        navigate("/teacher"); // Redirect to the teacher dashboard
      } else {
        throw new Error("No teacher record found. Please contact support.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Login</h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid lightgray",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid lightgray",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
*/
/*
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firebase DB instance

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Fetch the teacher's data from Firestore
      const teacherDoc = await getDoc(doc(db, "Teachers", userCredential.user.uid));
      if (teacherDoc.exists()) {
        console.log("Teacher Data:", teacherDoc.data());
        navigate("/teacher"); // Redirect to the teacher dashboard
      } else {
        throw new Error("No teacher record found. Please contact support.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid lightgray",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid lightgray",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
*/

import React, { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { ThemeContext } from "../App"; // Import ThemeContext

const LoginPage = () => {
  const { theme } = useContext(ThemeContext); // Access theme
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const teacherDoc = await getDoc(doc(db, "Teachers", userCredential.user.uid));
      if (teacherDoc.exists()) {
        console.log("Teacher Data:", teacherDoc.data());
        navigate("/teacher");
      } else {
        throw new Error("No teacher record found. Please contact support.");
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  // Dynamic styles based on the theme
  const styles = {
    container: {
      padding: "40px",
      maxWidth: "500px",
      margin: "40px auto",
      backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
      color: theme === "light" ? "#333" : "#f9f9f9",
      borderRadius: "12px",
      boxShadow: theme === "light"
        ? "0 4px 20px rgba(0, 0, 0, 0.1)"
        : "0 4px 20px rgba(0, 0, 0, 0.4)",
      fontFamily: "'Roboto', sans-serif",
      transform: "translateY(100px)",
    },
    header: {
      textAlign: "center",
      fontSize: "28px",
      color: theme === "light" ? "#333" : "#f9f9f9",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    error: {
      color: "#e74c3c",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "14px",
      fontWeight: "bold",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    input: {
      width: "100%",
      height: "50px",
      padding: "12px",
      borderRadius: "8px",
      border: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      backgroundColor: theme === "light" ? "#fff" : "#1e1e1e",
      color: theme === "light" ? "#333" : "#f9f9f9",
      fontSize: "16px",
      outline: "none",
      boxShadow: theme === "light"
        ? "inset 0 2px 4px rgba(0, 0, 0, 0.1)"
        : "inset 0 2px 4px rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
    },
    button: {
      width: "105%",
      height: "50px",
      padding: "12px",
      margin : "20px auto",
      borderRadius: "8px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      textTransform: "uppercase",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    buttonHover: {
      backgroundColor: "#45A049",
      transform: "scale(0.98)",
    },
  };
  

  return (

    <div style={styles.container}>
  <h2 style={styles.header}>Login</h2>
  {error && <p style={styles.error}>{error}</p>}
  <form style={styles.form} onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      style={styles.input}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      style={styles.input}
      required
    />
    <button
      type="submit"
      style={styles.button}
      onMouseEnter={(e) => (e.target.style.backgroundColor = "#45A049")}
      onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
    >
      Log In
    </button>
  </form>
</div>
  );
};

export default LoginPage;
