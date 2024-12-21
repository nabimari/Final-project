/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MyClassesPage = ({ teacherId }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassStudents, setNewClassStudents] = useState(0);
  const [editingClass, setEditingClass] = useState(null);
  const [editedStudents, setEditedStudents] = useState(0);

  const navigate = useNavigate(); // Hook for navigation

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "classes");
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    if (newClassName.trim() && newClassStudents > 0) {
      const classId = newClassName.replace(/\s+/g, "-");
      try {
        const classRef = doc(db, "classes", classId);
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          studentIds: [],
          numberOfStudents: newClassStudents,
        });

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, numberOfStudents: newClassStudents, studentIds: [] },
        ]);

        setNewClassName("");
        setNewClassStudents(0);
      } catch (err) {
        console.error("Error adding class:", err.message);
      }
    }
  };

  // Start editing a class
  const startEditing = (classItem) => {
    setEditingClass(classItem.id);
    setEditedStudents(classItem.numberOfStudents);
  };

  // Save the edited class
  const saveEditedClass = async () => {
    if (editedStudents >= 0) {
      try {
        const classRef = doc(db, "classes", editingClass);
        await updateDoc(classRef, {
          numberOfStudents: editedStudents,
        });

        setClasses((prev) =>
          prev.map((classItem) =>
            classItem.id === editingClass
              ? { ...classItem, numberOfStudents: editedStudents }
              : classItem
          )
        );

        setEditingClass(null);
        setEditedStudents(0);
      } catch (err) {
        console.error("Error updating class:", err.message);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Classes</h2>
      {classes.length > 0 ? (
        <ul>
          {classes.map((classItem) => (
            <li key={classItem.id} style={{ marginBottom: "10px" }}>
              {editingClass === classItem.id ? (
                <div>
                  <input
                    type="number"
                    min="0"
                    value={editedStudents}
                    onChange={(e) => setEditedStudents(Number(e.target.value))}
                    style={{ marginRight: "10px", padding: "5px" }}
                  />
                  <button
                    onClick={saveEditedClass}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "green",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingClass(null)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <strong>{classItem.name}</strong> - {classItem.numberOfStudents} Students
                  <button
                    onClick={() => startEditing(classItem)}
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "blue",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => navigate(`/add-student/${classItem.id}`)}
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      backgroundColor: "purple",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Add Student
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes found. Add a new class below.</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <h3>Add a New Class</h3>
        <input
          type="text"
          placeholder="Class Name"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Number of Students"
          value={newClassStudents}
          onChange={(e) => setNewClassStudents(Number(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          onClick={handleAddClass}
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Class
        </button>
      </div>
    </div>
  );
};

export default MyClassesPage;
*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MyClassesPage = ({ teacherId, teacherName }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassStudents, setNewClassStudents] = useState(0);

  const navigate = useNavigate(); // Hook for navigation

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "classes");
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    if (newClassName.trim() && newClassStudents > 0) {
      const classId = newClassName.replace(/\s+/g, "-");
      try {
        const classRef = doc(db, "classes", classId);
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          teacherName: teacherName,
          students: [],
          numberOfStudents: newClassStudents,
        });

        console.log("Class added successfully!");

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, numberOfStudents: newClassStudents, students: [] },
        ]);

        setNewClassName("");
        setNewClassStudents(0);
      } catch (err) {
        console.error("Error adding class:", err.message);
      }
    } else {
      alert("Please provide a valid class name and number of students.");
    }
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>My Classes</h2>
      {classes.length > 0 ? (
        <ul>
          {classes.map((classItem) => (
            <li key={classItem.id} style={{ marginBottom: "10px" }}>
              <div>
                <strong>{classItem.name}</strong> - {classItem.numberOfStudents} Students
                <button
                  onClick={() => navigate(`/add-student/${classItem.id}`)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "purple",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Add Students
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes found. Add a new class below.</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <h3>Add a New Class</h3>
        <input
          type="text"
          placeholder="Class Name"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Number of Students"
          value={newClassStudents}
          onChange={(e) => setNewClassStudents(Number(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          onClick={handleAddClass}
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Class
        </button>
      </div>
    </div>
  );
};

export default MyClassesPage;
*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MyClassesPage = ({ teacherId, teacherName }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassStudents, setNewClassStudents] = useState(0);

  const navigate = useNavigate(); // Hook for navigation

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "Classes"); // Ensure collection name matches Firestore rules
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    if (newClassName.trim() && newClassStudents > 0) {
      const classId = newClassName.replace(/\s+/g, "-");
      try {
        const classRef = doc(db, "Classes", classId); // Ensure "Classes" matches your Firestore collection name
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          teacherName: teacherName,
          students: [],
          numberOfStudents: newClassStudents,
        });

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, numberOfStudents: newClassStudents, students: [] },
        ]);

        console.log("Class added successfully!");
        alert("Class added successfully!");
        setNewClassName("");
        setNewClassStudents(0);
      } catch (err) {
        console.error("Error adding class:", err.message);
        alert(`Error adding class: ${err.message}`);
      }
    } else {
      alert("Please provide a valid class name and number of students.");
    }
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>My Classes</h2>
      {classes.length > 0 ? (
        <ul>
          {classes.map((classItem) => (
            <li key={classItem.id} style={{ marginBottom: "10px" }}>
              <div>
                <strong>{classItem.name}</strong> - {classItem.numberOfStudents} Students
                <button
                  onClick={() => navigate(`/add-student/${classItem.id}`)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "purple",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Add Students
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes found. Add a new class below.</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <h3>Add a New Class</h3>
        <input
          type="text"
          placeholder="Class Name"
          value={newClassName}
          onChange={(e) => setNewClassName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="number"
          placeholder="Number of Students"
          value={newClassStudents}
          onChange={(e) => setNewClassStudents(Number(e.target.value))}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          onClick={handleAddClass}
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Class
        </button>
      </div>
    </div>
  );
};

export default MyClassesPage;
*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MyClassesPage = ({ teacherId, teacherName }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassStudents, setNewClassStudents] = useState(0);

  const navigate = useNavigate();

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "Classes");
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    console.log("Adding class:", { newClassName, newClassStudents, teacherId, teacherName });
    if (newClassName.trim() && newClassStudents > 0) {
      const classId = newClassName.replace(/\s+/g, "-");
      try {
        const classRef = doc(db, "Classes", classId);
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          teacherName: teacherName,
          students: [],
          numberOfStudents: newClassStudents,
        });

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, numberOfStudents: newClassStudents, students: [] },
        ]);

        console.log("Class added successfully to Firestore.");
        alert("Class added successfully!");
        setNewClassName("");
        setNewClassStudents(0);
      } catch (err) {
        console.error("Error adding class to Firestore:", err.message);
        alert(`Error: ${err.message}`);
      }
    } else {
      alert("Please provide a valid class name and number of students.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>My Classes</h2>

      {classes.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {classes.map((classItem) => (
            <li
              key={classItem.id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <strong>{classItem.name}</strong> - {classItem.numberOfStudents} Students
                </span>
                <button
                  onClick={() => navigate(`/add-student/${classItem.id}`)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Add Students
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "#777" }}>No classes found. Add a new class below.</p>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", color: "#333" }}>Add a New Class</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Class Name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <input
            type="number"
            placeholder="Number of Students"
            value={newClassStudents}
            onChange={(e) => setNewClassStudents(Number(e.target.value))}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <button
            onClick={handleAddClass}
            style={{
              padding: "10px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassesPage;
*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MyClassesPage = ({ teacherId, teacherName }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassStudents, setNewClassStudents] = useState(0);

  const navigate = useNavigate();

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "Classes");
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    console.log("Adding class:", { newClassName, newClassStudents, teacherId, teacherName });
    if (newClassName.trim() && newClassStudents > 0) {
      const classId = newClassName.replace(/\s+/g, "-");
      try {
        const classRef = doc(db, "Classes", classId);
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          teacherName: teacherName,
          students: [],
          numberOfStudents: newClassStudents,
        });

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, numberOfStudents: newClassStudents, students: [] },
        ]);

        console.log("Class added successfully to Firestore.");
        alert("Class added successfully!");
        setNewClassName("");
        setNewClassStudents(0);
      } catch (err) {
        console.error("Error adding class to Firestore:", err.message);
        alert(`Error: ${err.message}`);
      }
    } else {
      alert("Please provide a valid class name and number of students.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>My Classes</h2>

      {classes.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {classes.map((classItem) => (
            <li
              key={classItem.id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <strong>{classItem.name}</strong> - {classItem.numberOfStudents} Students
                </span>
                <button
                  onClick={() => navigate(`/view-students/${classItem.id}`)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  View Students
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "#777" }}>No classes found. Add a new class below.</p>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", color: "#333" }}>Add a New Class</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Class Name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <input
            type="number"
            placeholder="Number of Students"
            value={newClassStudents}
            onChange={(e) => setNewClassStudents(Number(e.target.value))}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <button
            onClick={handleAddClass}
            style={{
              padding: "10px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Class
          </button>
        </div>
      </div>
    </div>
  );
};

*/
/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore"; // Ensure doc and setDoc are imported
import { useNavigate } from "react-router-dom";

const MyClassesPage = ({ teacherId, teacherName }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const [newClassStudents, setNewClassStudents] = useState(0);

  const navigate = useNavigate();

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "Classes");
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    console.log("Adding class:", { newClassName, newClassStudents, teacherId, teacherName });
    if (newClassName.trim() && newClassStudents > 0) {
      const classId = newClassName.replace(/\s+/g, "-");
      try {
        const classRef = doc(db, "Classes", classId);
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          teacherName: teacherName,
          students: [],
          numberOfStudents: newClassStudents,
        });

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, numberOfStudents: newClassStudents, students: [] },
        ]);

        console.log("Class added successfully to Firestore.");
        alert("Class added successfully!");
        setNewClassName("");
        setNewClassStudents(0);
      } catch (err) {
        console.error("Error adding class to Firestore:", err.message);
        alert(`Error: ${err.message}`);
      }
    } else {
      alert("Please provide a valid class name and number of students.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>My Classes</h2>

      {classes.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {classes.map((classItem) => (
            <li
              key={classItem.id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>
                  <strong>{classItem.name}</strong> - {classItem.numberOfStudents} Students
                </span>
                <button
                  onClick={() => navigate(`/view-students/${classItem.id}`)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  View Students
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center", color: "#777" }}>No classes found. Add a new class below.</p>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ textAlign: "center", color: "#333" }}>Add a New Class</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Class Name"
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <input
            type="number"
            placeholder="Number of Students"
            value={newClassStudents}
            onChange={(e) => setNewClassStudents(Number(e.target.value))}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
          <button
            onClick={handleAddClass}
            style={{
              padding: "10px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Add Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyClassesPage;
*/
import React, { useEffect, useState ,useContext} from "react";
import { db } from "../firebase"; // Import Firebase Firestore instance
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore"; // Ensure doc and setDoc are imported
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App"; // Import ThemeContext

const MyClassesPage = ({ teacherId, teacherName }) => {
  const [classes, setClasses] = useState([]);
  const [newClassName, setNewClassName] = useState("");
  const { theme } = useContext(ThemeContext); // Access theme

  const navigate = useNavigate();

  // Fetch classes for the teacher
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const classesRef = collection(db, "Classes");
        const q = query(classesRef, where("teacherId", "==", teacherId));
        const querySnapshot = await getDocs(q);

        const fetchedClasses = [];
        querySnapshot.forEach((doc) => {
          fetchedClasses.push({ id: doc.id, ...doc.data() });
        });

        setClasses(fetchedClasses);
      } catch (err) {
        console.error("Error fetching classes:", err.message);
      }
    };

    fetchClasses();
  }, [teacherId]);

  // Add a new class
  const handleAddClass = async () => {
    console.log("Adding class:", { newClassName, teacherId, teacherName });
    if (newClassName.trim()) {
      const classId = newClassName.replace(/\s+/g, "-").toLowerCase(); // Class ID generated from name
      try {
        const classRef = doc(db, "Classes", classId);
        await setDoc(classRef, {
          name: newClassName,
          teacherId: teacherId,
          teacherName: teacherName,
          students: [],
        });

        setClasses((prev) => [
          ...prev,
          { id: classId, name: newClassName, students: [] },
        ]);

        console.log("Class added successfully to Firestore.");
        alert("Class added successfully!");
        setNewClassName(""); // Reset input field
      } catch (err) {
        console.error("Error adding class to Firestore:", err.message);
        alert(`Error: ${err.message}`);
      }
    } else {
      alert("Please provide a valid class name.");
    }
  };


  const styles = {
    pageLayout: {
      display: "flex",
      flexDirection: "row",
      minHeight: "100vh",
      backgroundColor: theme === "light" ? "#f9f9f9" : "#121212",
      color: theme === "light" ? "#333" : "#f9f9f9",
      fontFamily: "'Roboto', sans-serif",
    },
    sidebarSpacing: {
      width: "300px", // Matches the width of the sidebar
      flexShrink: 0,
    },
    pageContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    headerTitle: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: theme === "light" ? "#333" : "#f9f9f9",
    },
    listContainer: {
      listStyleType: "none",
      padding: "0",
      width: "100%",
      maxWidth: "800px",
    },
    classItem: {
      marginBottom: "15px",
      padding: "20px",
      border: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      borderRadius: "8px",
      backgroundColor: theme === "light" ? "#fff" : "#1E1E1E",
      boxShadow: theme === "light"
        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 8px rgba(0, 0, 0, 0.4)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    viewStudentsButton: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s ease",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    viewStudentsButtonHover: {
      backgroundColor: "#45A049",
    },
    noClassesText: {
      textAlign: "center",
      color: theme === "light" ? "#777" : "#ccc",
      fontSize: "16px",
      marginTop: "20px",
    },
    addClassContainer: {
      marginTop: "20px",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: theme === "light" ? "#fff" : "#1E1E1E",
      boxShadow: theme === "light"
        ? "0 4px 8px rgba(0, 0, 0, 0.1)"
        : "0 4px 8px rgba(0, 0, 0, 0.4)",
      width: "100%",
      maxWidth: "800px",
    },
    addClassHeader: {
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      color: theme === "light" ? "#333" : "#f9f9f9",
    },
    addClassForm: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginTop: "15px",
    },
    inputField: {
      width: "95%",
      padding: "10px",
      borderRadius: "8px",
      border: theme === "light" ? "1px solid #ddd" : "1px solid #444",
      backgroundColor: theme === "light" ? "#fff" : "#1E1E1E",
      color: theme === "light" ? "#333" : "#f9f9f9",
      fontSize: "16px",
      outline: "none",
      boxShadow: theme === "light"
        ? "inset 0 2px 4px rgba(0, 0, 0, 0.1)"
        : "inset 0 2px 4px rgba(255, 255, 255, 0.1)",
    },
    addClassButton: {
      padding: "10px 20px",
      backgroundColor: theme === "light" ? "#007bff" : "#555",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    },
    addClassButtonHover: {
      backgroundColor: theme === "light" ? "#0056b3" : "#444",
    },
  };
  


  return (
    <div style={styles.pageLayout}> {/* New container for sidebar spacing */}
      <div style={styles.sidebarSpacing}></div> {/* Space for sidebar */}
      <div style={styles.pageContainer}>
        <h2 style={styles.headerTitle}>My Classes</h2>
  
        {classes.length > 0 ? (
          <ul style={styles.listContainer}>
            {classes.map((classItem) => (
              <li key={classItem.id} style={styles.classItem}>
                <div style={styles.itemRow}>
                  <span>
                    <strong>{classItem.name}</strong>
                  </span>
                  <button
                    onClick={() => navigate(`/view-students/${classItem.id}`)}
                    style={styles.viewStudentsButton}
                  >
                    View Students
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.noClassesText}>No classes found. Add a new class below.</p>
        )}
  
        <div style={styles.addClassContainer}>
          <h3 style={styles.addClassHeader}>Add a New Class</h3>
          <div style={styles.addClassForm}>
            <input
              type="text"
              placeholder="Class Name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              style={styles.inputField}
            />
            <button
              onClick={handleAddClass}
              style={styles.addClassButton}
            >
              Add Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default MyClassesPage;
