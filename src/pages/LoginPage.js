import React from "react";

function LoginPage() {
  const styles = {
    container: {
      textAlign: "center",
      backgroundColor: "#e3f2fd", // Light blue background
      padding: "20px",
      minHeight: "100vh",
    },
    form: {
      margin: "0 auto",
      padding: "20px",
      maxWidth: "400px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    input: {
      display: "block",
      width: "100%",
      marginBottom: "10px",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#42a5f5",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Username" />
        <input style={styles.input} type="password" placeholder="Password" />
        <button style={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
