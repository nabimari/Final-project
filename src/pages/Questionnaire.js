import React, { useState } from "react";

const Questionnaire = () => {
  const [responses, setResponses] = useState({});

  const handleInputChange = (section, question, value) => {
    setResponses((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [question]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Responses:", responses);
    alert("Thank you! Your responses have been submitted.");
  };

  const styles = {
    container: {
      width: "100%",
      height: "100%",
      padding: "20px",
      background: "linear-gradient(to bottom, #e3f2fd, #bbdefb)",
      fontFamily: "'Arial', sans-serif",
    },
    innerContainer: {
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    },
    header: {
      textAlign: "center",
      color: "#ffffff",
      backgroundColor: "#1e88e5",
      padding: "20px",
      borderRadius: "8px 8px 0 0",
    },
    section: {
      marginBottom: "30px",
    },
    questionBox: {
      marginBottom: "20px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f4f4f9",
    },
    label: {
      display: "block",
      marginBottom: "10px",
      fontWeight: "bold",
      color: "#333",
      fontSize: "16px",
    },
    input: {
      width: "100%",
      height: "40px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      marginBottom: "10px",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      height: "100px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "14px",
      resize: "none",
      boxSizing: "border-box",
    },
    submitButton: {
      display: "block",
      width: "100%",
      padding: "15px",
      backgroundColor: "#1e88e5",
      color: "white",
      fontSize: "18px",
      fontWeight: "bold",
      textAlign: "center",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },
    debug: {
      marginTop: "30px",
      padding: "10px",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <header style={styles.header}>
          <h1>Student Seating Preferences Questionnaire</h1>
        </header>

        <section style={styles.section}>
          <h2>Comfort and Focus</h2>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Where do you like to sit in the classroom?
              <input
                type="text"
                style={styles.input}
                onChange={(e) =>
                  handleInputChange(
                    "Comfort and Focus",
                    "Preferred Seating Location",
                    e.target.value
                  )
                }
              />
            </label>
            <label style={styles.label}>
              Why do you like sitting there?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Comfort and Focus",
                    "Reason for Seating Preference",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Do you find it easier to focus in a specific part of the room? If
              yes, where?
              <input
                type="text"
                style={styles.input}
                onChange={(e) =>
                  handleInputChange(
                    "Comfort and Focus",
                    "Focus Location",
                    e.target.value
                  )
                }
              />
            </label>
            <label style={styles.label}>
              Are there places where you find it harder to concentrate?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Comfort and Focus",
                    "Hard to Concentrate Areas",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Peer Interaction</h2>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Do you prefer sitting next to your friends, or do you focus better
              with other classmates?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Peer Interaction",
                    "Sitting with Friends",
                    e.target.value
                  )
                }
              />
            </label>
            <label style={styles.label}>
              During group activities, do you prefer being with friends or mixed
              with others?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Peer Interaction",
                    "Group Activity Preference",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Behavior and Participation</h2>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Does where you sit affect how much you participate in class?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Behavior and Participation",
                    "Participation Effect",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Are there certain spots where it’s harder to stay on task?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Behavior and Participation",
                    "Hard to Stay on Task Spots",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
        </section>

        <section style={styles.section}>
          <h2>Special Needs</h2>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Is there anything special you need to feel comfortable in class?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange("Special Needs", "Comfort Needs", e.target.value)
                }
              />
            </label>
          </div>
          <div style={styles.questionBox}>
            <label style={styles.label}>
              Do certain seating arrangements make it easier for you to learn?
              <textarea
                style={styles.textarea}
                onChange={(e) =>
                  handleInputChange(
                    "Special Needs",
                    "Easier Learning Arrangement",
                    e.target.value
                  )
                }
              />
            </label>
          </div>
        </section>

        <button style={styles.submitButton} onClick={handleSubmit}>
          Submit Questionnaire
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;
